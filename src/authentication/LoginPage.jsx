import React from 'react';
import LoginForm from './LoginForm';
import Particles from 'react-particles-js';
class LoginPage extends React.Component {
    render() {
        return (

            <div className="row home">
                <Particles
                    params={{
                    particles: {
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: "#3CA9D1",
                                blur: 5
                            }
                        }
                    }
                }}
                //     style={
                //         // width : '100%',
                // backgroundImage:`url(${logo})`}
                />
                <div className="col-md-4 col-md-offset-4">
                    {/* <h1>login form soon</h1> */}
                    <LoginForm/>
                </div>
            </div>
        )
    }
}

export default LoginPage