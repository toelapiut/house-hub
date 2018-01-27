import React from 'react';
import Particles from 'react-particles-js';
import $ from "jquery";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {userSignupRequest} from '../actions/signupActions';
import {addFlashMessage} from '../actions/flashMessages';
import SignUpPage from '../authentication/SignUpPage';
import LoginPage from '../authentication/LoginPage';
import sprite from './../img/sort-sprite.png'
class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showform: false,
            authentication:false
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
        // console.log("we are live")
    }
    changesignup() {
        this.setState({showform: false})
    }
    render() {
        console.log(this.props.authen.isAuthenticated)
        if(this.props.authen.isAuthenticated===true){
            
            this.context.router.history.push('/dashboard')
        }
        // console.log("authentication"+this.state.authentication)
    
        const togg = this.state.showform;
        const {userSignupRequest, addFlashMessage} = this.props
        let form = <LoginPage/>
        if (togg) {
            form = <SignUpPage/>
        }
        return (

            <div>
                <div
                    className="row"
                    style={{
                    height: "75%"
                }}>
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
                                        <button
                                            className="btn"
                                            id="register-form-link"
                                            style={{
                                            backgroundColor: "#2d3b54"
                                        }}onClick={this.doSome}>
                                            <div className="register">REGISTER</div>
                                        </button>
                                        {/* <a href="#" id="register-form-link"><div class="register">REGISTER</div></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="img"
                    style={{
                    height: "15vh"
                }}>
                    <img src={sprite} alt="" srcset=""/>
                </div>
            </div>
        )
    }
}
const mapStateToProp = state => {
    // console.log(state.auth)
    // this.state.authentication = state.auth
    // this.setState({authentication: state.auth})
   
    return {
        authen: state.auth
    }
  }

Landing.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    Properties: PropTypes.array,
    authentication: PropTypes.array
}
Landing.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect(mapStateToProp, {userSignupRequest, addFlashMessage})(Landing)

// const mapStateToProp = state => {
//     var x = state.homeData.data
//     // console.log(x)
//     return {Properties: state.homeData}
//   }
//   Content.propTypes = {
//     Properties: PropTypes.array
//   }
//   export default connect(mapStateToProp)(Content)
  