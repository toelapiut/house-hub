import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../actions/authActions'

class Navbar extends React.Component {

    logout(e){
        e.preventDefault()
        this.props.logout()
    }

    render(){
        const { isAuthenticated } = this.props.auth

        const userLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><a href="" onClick={this.logout.bind(this)}>Logout</a></li>
            </ul>
        )

        const guestLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/signup">Sign up</Link></li>
                <li><Link to="/login">login</Link></li>
            </ul>
        )

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <a className='navbar-brand' href="/">Hauz Hub</a>
                    </div>

                    <div className="collapse navbar-collapse">
                        {isAuthenticated ? userLinks : guestLinks}
                    </div>
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps,{logout})(Navbar)