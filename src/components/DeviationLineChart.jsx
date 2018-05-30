import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

var symetraData = 
{
	label: "Symetra",
	data: [0, 0, 0, 5, 3, 0, 0],
	fill: false,
	backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)'
};

var farmersData = 		
{
	label: "Farmers",
	//data: [10, 10, 15, 10, 10, 10, 9],
	fill: false,
	backgroundColor: 'rgba(100,100,192,0.4)',
    borderColor: 'rgba(100,100,192,1)'
};

var thresholdData = 
{
	label: "Threshold",
	data: [11,11,11,11,11,11,11],
	fill: false,
	borderDash: [5,15]
}

var initialChartData = {
	labels: ["2/3/2018", "2/10/2018", "2/17/2018", "2/24/2018", "3/3/2018", "3/10/2018", "3/17/2018"]
};

var chartOptions = {
	elements : {
		line : {
			tension : 0
		}
	}
}

class DeviationLineChart extends Component {

	constructor(props) {
		super(props);
		this.state = {
			companyID : props.companyID,
			chartData : initialChartData
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState( {companyID : nextProps.companyID} );
		var newDataSets = [];
		if ( nextProps.companyID === 'FNWL' ) {
			// get data for FNWL
			axios.get(process.env.REACT_APP_MARKERCAP_URL+'/FNWL')
				.then( res => {
					farmersData.data = res.data.data;
				});
			newDataSets.push( farmersData );
		}
		else if ( nextProps.companyID === 'SLIC' ) {
			newDataSets.push ( symetraData );
		}
		else if ( nextProps.companyID === 'ALL') {
			newDataSets.push( farmersData );
			newDataSets.push( symetraData );
		}
		newDataSets.push( thresholdData );
		initialChartData.datasets = newDataSets;
		this.setState( {chartData : initialChartData} );
	}

    render() {
        return (
            <div>
                <Line data={this.state.chartData} options={chartOptions} width="600" height="250" redraw/>
            </div>
        );
    }

}

export default DeviationLineChart;
