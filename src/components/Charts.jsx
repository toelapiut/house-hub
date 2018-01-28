import React from 'react'
import { LineChart, Line,PieChart,Pie } from 'recharts';
import Month from './dashboardCharts/Months'
import { Switch, Route } from 'react-router-dom';
import Expenses from './dashboardCharts/Expenses'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
// import propertyData from 
import { propertyData } from '../actions/propertyActions.js'
import HouseForm from "./forms/HouseForm";
class Charts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            property:[]
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({property:nextProps.property.data})
        console.log('====================================');
        console.log("component will reeiveprops",nextProps.property.data);
        console.log('====================================');
        
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
    console.log("property name: from state",this.state)

      return (
          <div className="content-wrapper">
            <section className="content-header">
            <div className="container" style={{backgroundColor:"white",height: "100vh"}}>
            <h1><span>{this.state.property.name}</span><span><button style={{float:"right"}} type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add House</button></span></h1>

                {/* <button style={{float:"right"}} type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add House</button> */}


                <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">


                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Add House and Info</h4>
                    </div>
                    <div class="modal-body">
                        <HouseForm/>
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

// export default Charts

const mapStateToProp = state => {
    // var x = state
      // this.setState({data:state.homeData})
  
    return {
      property: state.propertyData,
    }
  }
  Charts.propTypes = {
    property: PropTypes.array,
    // overallProperties: PropTypes.func.isRequired,
    // loadHome:PropTypes.func.isRequired,
    // propertyData:PropTypes.func
  
  }
  export default connect(mapStateToProp,{ propertyData })( Charts )
  