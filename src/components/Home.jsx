import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';
import { Route,Switch } from 'react-router-dom';
import Charts from './Charts'
import {overallProperties} from '../actions/propertyActions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {loadHome} from '../actions/dashboardActions'
// import {loadPayments} from '../actions/payments.action'

class Home extends Component {
  constructor(props) {
    super(props)

  }
  componentWillMount(){
    this.props.loadHome()
  }

  render() {
    // loadPayments()
    // loadHome()
    let renderedContent = null

    if (this.props.overallProperty.propertyContent){
      renderedContent=<Charts/>
    } else{
      renderedContent = <Content/>
    }

    return (

    <div>
      <Header/>
      <SideBar/>
      {renderedContent}
    </div>
    );
  }
}

const mapStateToProp = state => {
  // console.log('====================================');
  // console.log("maptostate",state);
  // console.log('====================================');

  return {
    overallProperty: state.overallProperty.data
  }
}
Home.propTypes = {
  overallProperty: PropTypes.object
}
export default connect(mapStateToProp,{overallProperties,loadHome})(Home);