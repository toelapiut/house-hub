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
import PropertyForm from "./forms/propertyForm";
// import {loadHome} from '../actions/dashboardActions'

class Content extends Component {
  constructor(props) {
    super(props)

    this.totalHouses = this.totalHouses.bind(this)
    this.totalMoney = this.totalMoney.bind(this)
    this.totalExpenses = this.totalExpenses.bind(this)
    this.monthlyMoney = this.monthlyMoney.bind(this)
    
  }

  monthlyMoney(){
    let payment_data = this.props.payments
    let cash = 0
    // let {January, February}
    for(let item of payment_data){
      cash = item.amount
      // month = item.month
      // name = item.property_id.name
    }

  }

  // this is a function that takes the state from the api backend and convert it to data that will be rendered in a chart component
  totalHouses(){

    let house_data = this.props.Properties.data
    let total = []

      for (let property of house_data){
        let name = property.name
        let eachdata={
          name:property.name,
          value:property.house_count
        }
        total.push(eachdata)
      }
    return total

  }

  totalExpenses(){
    let property_data = this.props.Properties.data
    let total_expenses = []

    for (let property of property_data){
      let name = property.name
      let total = parseInt(property.gabbage)+parseInt(property.security)+parseInt(property.cleaning)+parseInt(property.property_tax)
      let eachdata = {
        name:property.name,
        value:total
      }
      total_expenses.push(eachdata)
    }
    return total_expenses
  }

  totalMoney(){
    {
        let house_data = this.props.Properties.data
        // console.log("for loop here totalMoney()"+house_data);
    
        let count = 0
        let propertyName = ''
        let processedData = []
        for (let value of house_data) {
          for (let property of value.group_property){
            // console.log("for loop here totalMoney()"+property.name);
              propertyName = property.name
              let count = 0
            for (let cash of property.property_houses){
              count += parseInt(cash.price)
            }
            // console.log({"name":propertyName,"value":count})
            processedData.push({"name":propertyName,"value":count})
          }
        }
        return processedData
      }
    
      }

      totalTenants(){
        {
            let house_data = this.props.Properties.data
            // console.log("for loop here totalMoney()"+house_data);
        
            // let count = 0
            let propertyName = ''
            let processedData = []
            // for (let value of house_data) {
            //   for (let property of value.group_property){
            //       propertyName = property.name
            //   }
            // }
            return processedData
          }
        
          }

  render() {
    // this data is being sent as a prop to children components
    const house_data = this.totalHouses()
    const expenses_data = this.totalExpenses()
    console.log(this.props.payments)
    // var income_data= this.totalMoney()

    // const tenant_data = this.totalTenants()
    // console.log(expenses_data)

    return (<div className="content-wrapper">
      <section className="content-header">
      <button style={{float:"right"}} type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Property</button>


      <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">


            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Create New Property</h4>
            </div>
            <div class="modal-body">
              <PropertyForm/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
            </div>

        </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="box">
              <div className="box-header with-border">
                <h3 className="box-title">Monthly Recap Report</h3>
              </div>
              <div className="box-body">
                <div className="row">
                  <div className="col-md-4">
                    <h3 className="text-center">Overall House Count</h3>
                    <HouseCount house_count={house_data}/>
                  </div>
                  <div className="col-md-4">
                    <h3 className="text-center">Overall Total Income</h3>
                    <Expenses incomeData={house_data}/>
                  </div>
                  <div className="col-md-4">
                    <h3 className="text-center">
                      Overall Expenses
                    </h3>
                    <Expenses incomeData={expenses_data}/>
                    
                  </div>
                  <div className="col-md-12">
                    <h3 className="text-center">Monthly Income</h3>

                    {/* <p className="text-center">Monthly Income</p> */}
                    <Months/>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-12">
                    <h3>Tenants Status</h3>
                    {/* <SomeTenants tenantData={tenant_data}/> */}
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
  // var x = state.homeData.data
  // console.log(x)
  return {
    Properties: state.homeData,
    payments: state.paymentsData.data
    
  }
}
Content.propTypes = {
  Properties: PropTypes.array,
  payments: PropTypes.array
  
}
export default connect(mapStateToProp)(Content)
