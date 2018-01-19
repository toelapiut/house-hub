import React from 'react'
import { Bar,Line } from 'react-chartjs'
import {Doughnut} from 'react-chartjs';

class BarChart extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ChartData:{
        labels:["May","June","july","Aug"],
        datasets:[
          {
            label:"Population",
            data:[600,700,800,750],
            backGroundColor:[
              "#3e95cd"
            ]
          }
        ]
      }

    }
  }
  render(){
    return (
      <div className="chart">

          <Bar data={this.state.ChartData} width={1200} height={250} />

        CHART COMPONENT
      </div>
    )
  }
}

export default  BarChart
