import React from 'react'
import validateInput from './validations/login'
import { connect } from 'react-redux'
import { login } from '../actions/authActions'
import PropTypes from 'prop-types';

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
            errors:{},
            isLoading:false
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    isValid(){
        const {errors,isValid}=validateInput(this.state )

        if(!isValid){
            this.setState({errors})
        }
        return isValid
    }

    onSubmit(e){
        e.preventDefault()
        // if (this.isValid()){
            // dispach some
            this.setState({errors:{},isLoading:true})
            this.props.login(this.state).then(
                (res)=> this.context.router.history.push('/'),
                (data) => this.setState({ errors: data.response.data.non_field_errors[0],isLoading:false })
                
                (res)=> this.context.router.history.push('/dashboard'),
                // (err) => this.setState({errors:err.data.non_field_errors,isLoading:false})
                
                // console.log(this.state)
            )
        // }
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }


    render(){
        const{errors, username, password, isLoading } = this.state
        return (
            <form onSubmit={this.onSubmit}>
               <h1>Login </h1>

               <div className="form-group">
                <label className="Control-label">Username</label>
                <input
                value={this.state.username}
                onChange={this.onChange.bind(this)}
                type='text'
                name='username'
                error={errors.username}
                className='form-control'
                />
                <label  className="Control-label">Password</label>
                <input
                value={this.state.password}
                onChange={this.onChange.bind(this)}
                type="password"
                name='password'
                error={errors.password}
                className='form-control'
                />
               </div>
               <div className="form-group">
                <button disabled={isLoading} className='btn btn-primary btn-lg'>Login</button>
               </div>
            </form>

        )
    }
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired
}
LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect(null,{login})(LoginForm)
