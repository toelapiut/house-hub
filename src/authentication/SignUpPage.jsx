import React from 'react'
import SignUpForm from './SignUpForm'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userSignupRequest } from '../actions/signupActions'
import { addFlashMessage } from '../actions/flashMessages'

class SignUpPage extends React.Component {
    render(){

        const {userSignupRequest,addFlashMessage} = this.props

        return (
                    <SignUpForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
        )
    }
}

SignUpPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

// export default connect((state) => {return{} },{ userSignupRequest })(SignUpPage)
export default connect(null,{ userSignupRequest,addFlashMessage })(SignUpPage)
