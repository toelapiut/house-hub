import React from 'react'
import SignUpForm from './SignUpForm'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userSignupRequest } from '../actions/signupActions'

class SignUpPage extends React.Component {
    render(){

        const {userSignupRequest} = this.props

        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignUpForm userSignupRequest={userSignupRequest}/>
                </div>
            </div>
        )
    }
}

SignUpPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
} 

// export default connect((state) => {return{} },{ userSignupRequest })(SignUpPage)
export default connect(null,{ userSignupRequest })(SignUpPage)
