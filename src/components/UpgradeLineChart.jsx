import React, {Component} from 'react';
import {Line} from 'react-chartjs';

var symetraData = 
{
	label: "Symetra",
	fillColor: "rgba(151,187,205,0.2)",
	strokeColor: "rgba(151,187,205,1)",
	pointColor: "rgba(151,187,205,1)",
	pointStrokeColor: "#fff",
	pointHighlightFill: "#fff",
	pointHighlightStroke: "rgba(151,187,205,1)",
	data: [0, 0, 0, 5, 3, 0, 0]
};

var farmersData = 		
{
	label: "Farmers",
	fillColor: "rgba(220,220,220,0.2)",
	strokeColor: "rgba(220,220,220,1)",
	pointColor: "rgba(220,220,220,1)",
	pointStrokeColor: "#fff",
	pointHighlightFill: "#fff",
	pointHighlightStroke: "rgba(220,220,220,1)",
	data: [10, 10, 15, 10, 10, 10, 9]
};

var initialChartData = {
	labels: ["2/3/2018", "2/10/2018", "2/17/2018", "2/24/2018", "3/3/2018", "3/10/2018", "3/17/2018"],
	datasets: [
		{
			label: "Farmers",
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [10, 10, 15, 10, 10, 10, 9]
		},
		{
			label: "Symetra",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [0, 0, 0, 5, 3, 0, 0]
		}
	]
};

class UpgradeLineChart extends Component {

	constructor(props) {
		super(props);
		this.state = {
			companyID : props.companyID,
			chartData : initialChartData
		};
		console.log("UpgradeLineChart" + props.companyID);
	}

	componentWillReceiveProps(nextProps) {
		this.setState( {companyID : nextProps.companyID} );
		var newDataSets = [];
		if ( nextProps.companyID === 'FNWL' ) {
			newDataSets.push( farmersData );
		}
		else if ( nextProps.companyID === 'SLIC' ) {
			newDataSets.push ( symetraData );
		}
		else if ( nextProps.companyID === 'ALL') {
			newDataSets.push( farmersData );
			newDataSets.push( symetraData );
		}
		initialChartData.datasets = newDataSets;
		this.setState( {chartData : initialChartData} );
	}

	componentDidMount() {
		console.log("UpgradeLineChart mount");
	}

    render() {
        return (
            <div>
                <Line data={this.state.chartData} width="600" height="250" redraw/>
            </div>
        );
    }

}

export default UpgradeLineChart;
