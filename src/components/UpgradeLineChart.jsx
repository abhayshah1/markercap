import React, {Component} from 'react';
import {Line} from 'react-chartjs';



var chartData = {
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

    render() {
        return (
            <div>
                <Line data={chartData} width="600" height="250"/>
            </div>
        );
    }

}

export default UpgradeLineChart;
