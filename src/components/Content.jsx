// Content.js

import React, {Component} from 'react';
import Charts from "./Charts"
import Expenses from './dashboardCharts/Expenses'
import HouseCount from './dashboardCharts/HouseCount'
import Months from './dashboardCharts/Months'
import SomeTenants from './dashboardCharts/SomeTenants'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

class Content extends Component {
  constructor(props) {
    super(props)
    this.totalHouses = this.totalHouses.bind(this)
    this.totalMoney = this.totalMoney.bind(this)
    
  }

  // this is a function that takes the state from the api backend and convert it to data that will be rendered in a chart component
  totalHouses(){

    let house_data = this.props.Properties.data

    let total = 0
    let occupied = 0

    for (let value of house_data) {
      for (let cash of value.group_property){
        total += cash.house_count
        occupied += cash.property_houses.length
      }
    }

    return {
      "available":total-occupied,
      "occupied":occupied
    }

  }
  totalMoney(){
    
        let house_data = this.props.Properties.data
    
        let count = 0
        for (let value of house_data) {
          for (let cash of value.group_property){
            count += cash.house_count
          }
        }
        // console.log("for loop here"+count);
        return count
    
      }

  render() {
    // this data is being sent as a prop to children components
    let house_data = this.totalHouses()

    var principle_money= this.totalMoney()

    return (<div className="content-wrapper">
      <section className="content-header">
        <div className="row">
          <div className="col-md-12">
            <div className="box">
              <div className="box-header with-border">
                <h3 className="box-title">Monthly Recap Report</h3>
              </div>
              <div className="box-body">
                <div className="row">
                  <div className="col-md-4">
                    <p className="text-center">Overall House Count</p>
                    <HouseCount house_count={house_data}/>
                  </div>
                  <div className="col-md-4">
                    <p className="text-center">Overall Total Income</p>
                    <Expenses/>
                  </div>
                  <div className="col-md-4">
                    <h3 className="text-center">
                      Overall Expenses
                    </h3>
                    <Expenses/>
                  </div>
                  <div className="col-md-5">
                    <h3 className="text-center">Monthly Income</h3>

                    {/* <p className="text-center">Monthly Income</p> */}
                    <Months/>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-5">
                    <h3>Tenants Status</h3>
                    <SomeTenants/>
                  </div>
                </div>

              </div>
              <div className="box-footer">
                <div className="row">
                  <div className="col-sm-3 col-xs-6">
                    <div className="description-block border-right">
                      <span className="description-percentage text-green">
                        <i className="fa fa-caret-up"></i>
                        17%</span>
                      <h5 className="description-header">$35,210.43</h5>
                      <span className="description-text">TOTAL REVENUE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>)
  }
}

const mapStateToProp = state => {
  var x = state.homeData.data
  // console.log(x)
  return {Properties: state.homeData}
}
Content.propTypes = {
  Properties: PropTypes.array
}
export default connect(mapStateToProp)(Content)
