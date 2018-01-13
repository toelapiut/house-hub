import React from 'react'
import PropTypes from 'prop-types'
// import { browserHistory } from 'react-router'

class SignUpForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password1:'',
            password2:'',
            errors:{},
            isLoading: false
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onSubmit(e){
      console.log(this.state)
      e.preventDefault()
      this.setState({errors:{},isLoading:true })
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
             text: 'You signed up successfully, welcome to Hauz Hub  '
          })

          this.context.router.history.push('/')
        },
        (data) => this.setState({ errors: data.response.data,isLoading:false })
      )

        // if (this.isValid()){
        //     // dispach some
        //     this.setState({errors:{},isLoading:true})
        //     this.props.login(this.state).then(
        //         (res)=> this.context.router.push('/'),
        //         (err) => this.setState({errors:err.data.errors,isLoading:false})

        //     )
        // }
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    render(){
        const {errors} =this.state
        return(
            <form onSubmit={this.onSubmit}>
                <h2>SignUp Form</h2>
                <div className="form-group">
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
                    value ={this.state.password1}
                    onChange={this.onChange}
                    type="password"
                    name="password1"
                    className="form-control"/>
                    {errors.password1 && <span className="help-block">{errors.password1}</span> }

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
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
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
