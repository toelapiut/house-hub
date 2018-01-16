import React from 'react'

export default () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <a className='navbar-brand' href="/">Hauz Hub</a>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="/signup">Sign up</a></li>
                        <li><a href="/login">login</a></li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}