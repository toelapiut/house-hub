import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';
import { Route,Switch } from 'react-router-dom';
import Charts from './Charts'
import {overallProperties} from '../actions/propertyActions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Home extends Component {
  constructor(props) {
    super(props)

  }

  render() {

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
  return {overallProperty: state.overallProperty.data}
}
Home.propTypes = {
  overallProperty: PropTypes.array
}
export default connect(mapStateToProp,{overallProperties})(Home);