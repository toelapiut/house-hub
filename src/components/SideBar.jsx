// SideBar.js

import React, {Component} from 'react';
// import mui from 'material-ui';
// import AlarmIcon from 'react-material-icons/icons/action/alarm';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { overallProperties,eachProperty } from '../actions/propertyActions.js'

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      propertyContent: false
    }
    this.changeContent = this.changeContent.bind(this)
    this.resumeContent = this.resumeContent.bind(this)
  }
  changeContent(){
    this.setState({propertyContent:true})
    this.props.overallProperties(this.state)
  }
  resumeContent(){
    this.setState({propertyContent:false})
    this.props.overallProperties(this.state)
  }
  
  render() {
    let house_data = this.props.Properties.data
    this.props.overallProperties(this.state)
    
    return (<aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          {/* <div className="pull-left image">
                            <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                        </div> */
          }
          {/* <div className="pull-left info">
                            <p>Apiut Toel</p>
                            <a href="#">
                                <i className="fa fa-circle text-success"></i>
                                Online</a>
                        </div> */
          }
        </div>
        <form action="#" method="get" className="sidebar-form">
          <div className="input-group">
            <input type="text" name="q" className="form-control" placeholder="Search..."/>
            <span className="input-group-btn">
              <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                <i className="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>
        <ul className="sidebar-menu" data-widget="tree">
          <li className="header">MAIN NAVIGATION</li>
          <li className="treeview">
            <a href="#" onClick={this.resumeContent}>
              {/* <AlarmIcon/> */}
              <span>Overall Info</span>
              <span className="pull-right-container">
                <span className="label label-primary pull-right">4</span>
              </span>
            </a>
            <ul className="treeview-menu">
              <li>
                <a href="/">
                  <i className="fa fa-circle-o"></i>
                  Top Navigation</a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-circle-o"></i>
                  Boxed</a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-circle-o"></i>
                  Fixed</a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-circle-o"></i>
                  Collapsed Sidebar</a>
              </li>
            </ul>
          </li>
          <li>
            <a  onClick={this.changeContent}>
              <i className="fa fa-th"></i>
              <span>Properties</span>
              <span className="pull-right-container">
                <small className="label pull-right bg-green">new</small>
              </span>
            </a>
          </li>
          <li className="treeview">
            <a href="#">
              <i className="fa fa-table "></i>
              <span>Tenants</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            {/* <ul className="treeview-menu">
                                <li>
                                    <a href="pages/charts/chartjs.html">
                                        <i className="fa fa-circle-o "></i>
                                        ChartJS</a>
                                </li>
                                <li>
                                    <a href="pages/charts/morris.html">
                                        <i className="fa fa-circle-o"></i>
                                        Morris</a>
                                </li>
                                <li>
                                    <a href="pages/charts/flot.html">
                                        <i className="fa fa-circle-o"></i>
                                        Flot</a>
                                </li>
                                <li>
                                    <a href="pages/charts/inline.html">
                                        <i className="fa fa-circle-o"></i>
                                        Inline charts</a>
                                </li>
                            </ul> */
            }
          </li>
          <li>
            <ul className="treeview-menu">
              <li>
                <a href="/">
                  <i className="fa fa-circle-o"></i>
                  Simple tables</a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-circle-o"></i>
                  Data tables</a>
              </li>
            </ul>
          </li>
          {/* <li>
            <a href="/">
              <i className="fa fa-calendar"></i>
              <span>Calendar</span>
              <span className="pull-right-container">
                <small className="label pull-right bg-red">3</small>
                <small className="label pull-right bg-blue">17</small>
              </span>
            </a>
          </li> */}
          {/* <li>
            <a href="/">
              <i className="fa fa-envelope "></i>
              <span>Mailbox</span>
              <span className="pull-right-container">
                <small className="label pull-right bg-yellow">12</small>
                <small className="label pull-right bg-green">16</small>
                <small className="label pull-right bg-red">5</small>
              </span>
            </a>
          </li> */}
        </ul>
      </section>
    </aside>)
  }
}
const mapStateToProp = state => {
  var x = state.homeData.data
  // console.log(x)
  return {Properties: state.homeData}
}
SideBar.propTypes = {
  Properties: PropTypes.array,
  overallProperties: PropTypes.func.isRequired

}
export default connect(mapStateToProp,{overallProperties})(SideBar)
