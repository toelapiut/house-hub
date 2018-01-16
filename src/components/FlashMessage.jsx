import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class FlashMessage extends React.Component{
    render(){
        const {id,type,text } = this.props.message
        return(
            <div className={classnames('alert',{
                'alert-success':type==='success',
                'alert-danger':type==='error'
            })}>
                {text}
            </div>
        )
    }
}

FlashMessage.propTypes={
    message: PropTypes.object.isReguired
}

export default FlashMessage