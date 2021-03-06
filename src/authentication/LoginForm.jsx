import React from 'react'
import validateInput from './validations/login'
import { connect } from 'react-redux'
import { login } from '../actions/login'

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
        console.log(this.state)
        if (this.isValid()){
            // dispach some 
            this.setState({errors:{},isLoading:true})
            this.props.login(this.state).then(
                (res)=> this.context.router.push('/'),
                (err) => this.setState({errors:err.data.errors,isLoading:false})

            )
        }
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
    login: React.PropTypes.func.isRequired
}
LoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(null,{login})(LoginForm)