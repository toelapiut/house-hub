// SideBar.js

import React, {Component} from 'react';
// import mui from 'material-ui';
// import AlarmIcon from 'react-material-icons/icons/action/alarm';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { overallProperties,eachProperty } from '../actions/propertyActions.js'
import {loadHome} from '../actions/dashboardActions'

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      propertyContent: false,
      data:[]
    }
    this.changeContent = this.changeContent.bind(this)
    this.resumeContent = this.resumeContent.bind(this)
    let listItems = null
  }
  changeContent(qwerty){
    // console.log(qwerty)
    
    this.setState({propertyContent:true})
    this.props.overallProperties(this.state)
  }
  resumeContent(){
    this.setState({propertyContent:false})
    this.props.overallProperties(this.state)
  }

  componentWillMount(){
    // this.props.loadHome()
    // this.setState({data:this.props.Properties})
    // this.props.overallProperties(this.state)
    // let listItems=this.state.data.map((property) =>
    
    //       <li>
    //       <a  onClick={this.changeContent.bind(null,property.id)}>
    //         <i className="fa fa-th"></i>
    //         <span>{property.name}</span>
    //         <span className="pull-right-container">
    //           <small className="label pull-right bg-green">new</small>
    //         </span>
    //       </a>
    //       </li>
    //     )
  console.log('====================================');
  console.log('componentwillmount functiont',this.props);
  console.log('====================================');

  }

  componentWillReceiveProps(nextProps){
    this.setState({data:nextProps.Properties.data})
    console.log('====================================');
    console.log("component will reeiveprops",this.state);
    console.log('====================================');
    
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('====================================');
    console.log('should component update',nextProps);
    console.log('====================================');
    return true
  }

  componentWillUpdate(nextProps){
    console.log('====================================');
    console.log('componentwillupdate',nextProps);
    console.log('====================================');
  }
  
  render() {
    let house_data = this.props.Properties.data
    
    // let listItems=null
    console.log('====================================');
    console.log('tis state');
    console.log(this.state)
    console.log('====================================');

    
    // const property_list = this.props.Properties
    
    // let listItems = this.state.data.map((property) =>
    
    //       <li>
    //       <a  onClick={this.changeContent.bind(null,property.id)}>
    //         <i className="fa fa-th"></i>
    //         <span>{property.name}</span>
    //         <span className="pull-right-container">
    //           <small className="label pull-right bg-green">new</small>
    //         </span>
    //       </a>
    //       </li>
    //     )
    
    return (<aside className="main-sidebar" style={{position:"fixed"}}>
      <section className="sidebar">
        <div className="user-panel">
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
          </li>
          {/* {listItems} */}
          {/* this.setState({data:this.props.Properties.property_list}) */}
          {this.state.data.map((property) =>
            <li>
            <a  onClick={this.changeContent.bind(null,property.id)}>
              <i className="fa fa-th"></i>
              <span>{property.name}</span>
              <span className="pull-right-container">
                <small className="label pull-right bg-green">new</small>
              </span>
            </a>
            </li>
          )}
    

          <li className="treeview">
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
        </ul>
      </section>
    </aside>)
  }
}
const mapStateToProp = state => {
  // var x = state
    // this.setState({data:state.homeData})

  return {
    Properties: state.homeData,
  }
}
SideBar.propTypes = {
  Properties: PropTypes.array,
  overallProperties: PropTypes.func.isRequired,
  loadHome:PropTypes.func.isRequired

}
export default connect(mapStateToProp,{overallProperties,loadHome})(SideBar)
