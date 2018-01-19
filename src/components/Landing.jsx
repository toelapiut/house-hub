import React from 'react';
import Particles from 'react-particles-js';
import $ from "jquery";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {userSignupRequest} from '../actions/signupActions'
import {addFlashMessage} from '../actions/flashMessages'
import SignUpPage from '../authentication/SignUpPage'
import LoginPage from '../authentication/LoginPage';

class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showform: false
        };

        this.doSome = this
            .doSome
            .bind(this)
        this.changesignup = this
            .changesignup
            .bind(this)

    }
    doSome() {
        this.setState({showform: true})
        console.log("we are live")
    }
    changesignup() {
        this.setState({showform: false})
    }
    render() {
        const togg = this.state.showform;
        const {userSignupRequest, addFlashMessage} = this.props
        let form = <LoginPage/>
        if (togg) {
            form = <SignUpPage/>
        }
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-login">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        {form}
                                    </div>
                                </div>
                            </div>
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-6 tabs">
                                        <button
                                            className=" btn active"
                                            id="login-form-link"
                                            onClick={this.changesignup}>
                                            <div className="login">LOGIN</div>
                                        </button>
                                        {/* <a href="#" class="active" id="login-form-link"><div class="login">LOGIN</div></a> */}
                                    </div>
                                    <div className="col-xs-6 tabs">
                                        <button className="btn" id="register-form-link" style={{backgroundColor: "#2d3b54"}}onClick={this.doSome}>
                                            <div className="register">REGISTER</div>
                                        </button>
                                        {/* <a href="#" id="register-form-link"><div class="register">REGISTER</div></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

Landing.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest, addFlashMessage})(Landing)