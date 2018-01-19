import React from 'react'
// import { Doughnut } from 'react-chartjs'
// import {Bar, Doughnut} from 'react-chartjs';
import {Doughnut} from 'react-chartjs-2';


export default class DoughnutChart extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ChartData:{
        labels: ["Occupied 12", "Available 4"],
        datasets: [
            {
            label: "Property",
            backGroundColor: ["#3e95cd", "#8e5ea2"],
            data: [12,4]
            }
        ]
        },
        options: {
        title: {
            display: true,
            text: 'Court Nish'
        }
    }

    }
  }
  render(){
    return (
      <div className="chart"> 
        <h3>doughnut here</h3>
          <Doughnut data={this.state.ChartData} width={1200} height={250} />
      </div>
    )
  }
}

// export default  DoughnutChart
