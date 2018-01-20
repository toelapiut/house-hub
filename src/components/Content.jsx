// Content.js

import React, {Component} from 'react';
import Charts from "./Charts"
import Expenses from './dashboardCharts/Expenses'
import HouseCount from './dashboardCharts/HouseCount'
import Months from './dashboardCharts/Months'
import SomeTenants from './dashboardCharts/SomeTenants'

export default class Content extends Component {
    render(){
        return (
            <div className="content-wrapper">
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
                                            <HouseCount/>
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
                                        <div className="col-md-2">
                                        </div>
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
                                                <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
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
            </div>
        )
    }
}
