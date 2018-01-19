import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import validateInput from './validations/signup'
class SignUpForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password:'',
            password2:'',
            errors:{},
            isLoading: false
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e){
        e.preventDefault()
        if (this.isValid()){
            this.setState({errors:{},isLoading:true})
            this.props.userSignupRequest(this.state).then(
                (res)=> this.context.router.history.push('/dashboard'),
                (data) => this.setState({ errors: data.response.data,isLoading:false })
            )
        }
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    isValid(){
        const {errors,isValid } = validateInput(this.state)
        if(!isValid) {
            this.setState({errors})
        }
        return isValid
    }
    render(){
        const {errors} =this.state
        return(
            <form onSubmit={this.onSubmit}>
                <h2>SignUp Form</h2>
                <div className={classnames("form-group",{'has-error':errors.username})}>
                    <label htmlFor="" className="control-label">Username</label>
                    <input
                    value ={this.state.username}
                    onChange={this.onChange}
                    type="text"
                    name="username"
                    className="form-control"/>
                    {errors.username && <span className="help-block">{errors.username}</span> }
                </div>
                <div className="form-group">
                    <label htmlFor="" className="control-label">Email</label>
                    <input
                    value ={this.state.email}
                    onChange={this.onChange}
                    type="email"
                    name="email"
                    className="form-control"/>
                    {errors.email && <span className="help-block">{errors.email}</span> }
                </div>
                <div className="form-group">
                    <label htmlFor="" className="control-label">Password</label>
                    <input
                    value ={this.state.password}
                    onChange={this.onChange}
                    type="password"
                    name="password"
                    className="form-control"/>
                    {errors.password && <span className="help-block">{errors.password}</span> }
                </div>
                <div className="form-group">
                    <label htmlFor="" className="control-label">PasswordConfirmation</label>
                    <input
                    value ={this.state.password2}
                    onChange={this.onChange}
                    type="password"
                    name="password2"
                    className="form-control"/>
                    {errors.password2 && <span className="help-block">{errors.password2}</span> }
                </div>
                <div className="form-group">
                    <button disabled={this.state.isLoading} className="form-control btn btn-register">
                    SignUp
                    </button>
                </div>
            </form>
        )
    }
}
SignUpForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isReguired
}
SignUpForm.contextTypes = {
    router: PropTypes.object.isRequired
}
export default SignUpForm