// Header.js
import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../actions/authActions'

class Header extends Component {


    logout(e){
        e.preventDefault()
        this.props.logout()
    }
    render(){

        const { isAuthenticated } = this.props.auth

        const userLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><a href="" onClick={this.logout.bind(this)}>Logout</a></li>
            </ul>
        )        
        return (
            <header className="main-header">
                <a href="#" className="logo">
                    <span className="logo-mini"><b>H</b>-H</span>
                    <span className="logo-lg"><b>House</b>Hub</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fal fa-cog"></i>
                                    <span className="label label-success">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 4 messages</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                        Support Team
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                <li><a href="" onClick={this.logout.bind(this)}>Logout</a></li>
                            
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

Header.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps,{logout})(Header)
