import React from 'react'
import { LineChart, Line,PieChart,Pie } from 'recharts';
import Month from './dashboardCharts/Months'
import { Switch, Route } from 'react-router-dom';
import Expenses from './dashboardCharts/Expenses'

class Charts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isHovered: false};
    }
  
    render() {

    const data = [
        {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
        {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ];
  const data02 = [
        {name: 'Occupied', value: 25},
        {name: 'Available', value: 6},

    ]
    const income = [
        {name:'Court Peaky', value:400000},
        {name:'Court Blinders', value:550000},
        
    ]

      return (
          <div className="charts">
            <Switch>
            <Route exact path='/property' component={Month}/>

            </Switch>

            <h1>charts here</h1>
            <div className="container" style={{backgroundColor:"white"}}>
                <div className="row">
                    <div className="col-md-4">
                    <h3>Properties</h3>
                    {/* <ul>
                        <li><a href="">Court Peaky: Ruai</a></li>
                        <li><a href="">Court Blinders: Kabete</a></li>
                    </ul> */}
                    <Expenses/>
                    </div>
                    <div className="col-md-4">
                    <h3>Overall House Count</h3>
                    <PieChart width={800} height={400}>
                    <Pie data={data02} cx={200} cy={200} innerRadius={40} outerRadius={90} fill="#82ca9d" label/>
                   </PieChart>
                    </div>
                    <div className="col-md-4">
                    <h3>This Month Income(Ksh)</h3>
                    <PieChart width={800} height={400}>
                    <Pie data={income} cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label/>
                   </PieChart>
                    </div>
                </div>
                <div className="col-md-6">
                    <h3>Monthly Income</h3>
                <Month/>
                </div>
                <div className="col-md-6">
                    <h3>Tenants</h3>
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Full Names</th>
                        <th>Property</th>
                        <th>House No</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>David Mwangi</td>
                        <td>Court Peaky</td>
                        <td>3A</td>
                        <td>Paid</td>
                    </tr>
                    <tr>
                        <td>David Mwangi</td>
                        <td>Court Peaky</td>
                        <td>3A</td>
                        <td>Paid</td>
                    </tr>                    
                    <tr>
                        <td>David Mwangi</td>
                        <td>Court Peaky</td>
                        <td>3A</td>
                        <td>Paid</td>
                    </tr>
                </tbody>
                </table>
                </div>
            </div>
          </div>
      );
    }
  }

export default Charts