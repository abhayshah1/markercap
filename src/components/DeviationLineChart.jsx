import React, {Component} from 'react';
import {connect} from 'react-redux';
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
	data: [10, 10, 15, 10, 10, 10, 9],
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

var customerData = {
	labels: ["2/3/2018", "2/10/2018", "2/17/2018", "2/24/2018", "3/3/2018", "3/10/2018", "3/17/2018"]
};

var chartOptions = {
	elements : {
		line : {
			tension : 0
		}
	},
	scales : {
		xAxes: [{
			type: 'time',
			time: {
				unit: "week",
				displayFormats: {
					week: 'MM/DD'
				}
			}
		}]
	}
}

class DeviationLineChart extends Component {

	constructor(props) {
		super(props);
		this.state = {
			companyID : props.companyID,
			chartData : customerData
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
					newDataSets.push( farmersData );
					customerData.datasets = newDataSets;
					customerData.labels = res.data.daterange;
					// update the state to refresh the component
					this.setState( {chartData : customerData});
				});
		}
		else if ( nextProps.companyID === 'SLIC' ) {
			// get data for SLIC
			axios.get(process.env.REACT_APP_MARKERCAP_URL+'/SLIC')
				.then( res => {
					symetraData.data = res.data.data;
					newDataSets.push( symetraData );
					customerData.datasets = newDataSets;
					customerData.labels = res.data.daterange;
					// update the state to refresh the component
					this.setState( {chartData : customerData});
				});
		}
		else if ( nextProps.companyID === 'ALL') {
			// // get data for FNWL
			// axios.get(process.env.REACT_APP_MARKERCAP_URL+'/FNWL')
			// 	.then( res => {
			// 		farmersData.data = res.data.data;
			// 		newDataSets.push( farmersData );
			// 		customerData.datasets = newDataSets;
			// 		customerData.labels = res.data.daterange;
			// 		// update the state to refresh the component
			// 		this.setState( {chartData : customerData});
			// 	});
			// // get data for SLIC
			// axios.get(process.env.REACT_APP_MARKERCAP_URL+'/SLIC')
			// 	.then( res => {
			// 		symetraData.data = res.data.data;
			// 		newDataSets.push( symetraData );
			// 		customerData.datasets = newDataSets;
			// 		customerData.labels = res.data.daterange;
			// 		// update the state to refresh the component
			// 		this.setState( {chartData : customerData});
			// 	});		
			var fullDateRange = [];
			var farmersDate = ["2/3/2018", "2/10/2018", "2/17/2018", "2/24/2018", "3/3/2018", "3/10/2018", "3/17/2018", "3/25/2018"];
			var slicDate = ["8/5/2018", "8/12/2018", "8/19/2018", "8/26/2018", "9/9/2018"];
			fullDateRange = farmersDate.concat(slicDate);
			// sort the date ranges
		}

		newDataSets.push( thresholdData );
		newDataSets.push( symetraData );
		newDataSets.push( farmersData );
		customerData.datasets = newDataSets;
		this.setState( {chartData : customerData} );
	}

    render() {
        return (
            <div>
                <Line data={this.state.chartData} options={chartOptions} width="600" height="250" redraw/>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        companyList : state.companyDeviationPlot.companyList
    }
}

export default connect(mapStateToProps, null) (DeviationLineChart);