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
          <div className="content-wrapper">
            <section className="content-header">
            <div className="container" style={{backgroundColor:"white",height: "100vh"}}>
            <h1><span>Alabasta Towers</span><span><button style={{float:"right"}} type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add House</button></span></h1>

                {/* <button style={{float:"right"}} type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add House</button> */}


                <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">


                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Add House and Info</h4>
                    </div>
                    <div class="modal-body">
                    <form action="/action_page.php">
                        <div class="form-group">
                            <label for="house no">House No</label>
                            <input type="text" class="form-control" id="text"/>
                        </div>
                        <div class="form-group">
                            <label for="house no">Full Names</label>
                            <input type="text" class="form-control" id="text"/>
                        </div>
                        <div class="form-group">
                            <label for="house no">Phone Number</label>
                            <input type="text" class="form-control" id="text"/>
                        </div>
                        <div class="form-group">
                            <label for="pwd">Rent Amount</label>
                            <input type="text" class="form-control" id="pwd"/>
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                    </div>

                </div>
                </div>
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>House No</th>
                        <th>Full Names</th>
                        <th>Phone Number</th>
                        <th>price</th>
                        <th>occupancy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>3A</td>
                        <td>David Mwangi</td>
                        <td>0711347722</td>
                        <td>12000</td>
                        <td>Vacant</td>
                    </tr>
                    <tr>
                        <td>2A</td>
                        <td>Toel Apiut</td>
                        <td>07569375</td>
                        <td>12000</td>
                        <td>Occupied</td>
                    </tr>                    
                    <tr>
                        <td>3B</td>
                        <td>Nish </td>
                        <td>07365738</td>
                        <td>12000</td>
                        <td>Occupied</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </section>
          </div>
      );
    }
  }

export default Charts