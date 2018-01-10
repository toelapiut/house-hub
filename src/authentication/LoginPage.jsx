import React from 'react'
import LoginForm from './LoginForm'
class LoginPage extends React.Component {
    render(){
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    {/* <h1>login form soon</h1> */}
                    <LoginForm/>
                </div>
            </div>
        )
    }
}

export default LoginPage