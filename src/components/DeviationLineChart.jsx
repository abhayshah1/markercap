import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

var thresholdData = 
{
	label: "Threshold",
	data: [11,11,11,11,11,11,11],
	fill: false,
	borderDash: [5,15]
}

var chartData = {
	labels: ["2/3/2018", "2/10/2018", "2/17/2018", "2/24/2018", "3/3/2018", "3/10/2018", "3/17/2018"]
};

var chartOptions = {
	elements : {
		line : {
			tension : 0,
			fill : false
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
	}

    render() {
		var newDataSets = [];
		// push threshold data
		newDataSets.push( {label : 'Threshold', data: thresholdData.data} );
		this.props.companyList.forEach(company => {
			if ( company.plot ) {
				newDataSets.push( {label : company.code, data : company.data } );
			}
		});
		
		chartData.datasets = newDataSets;

        return (
            <div>
                <Line data={chartData} options={chartOptions} width="600" height="250" redraw/>
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