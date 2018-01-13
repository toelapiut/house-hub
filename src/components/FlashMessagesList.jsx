import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FlashMessage from './FlashMessage'
// import map from ''

class FlashMessagesList extends React.Component{
    render(){
        const messags = this.props.messages.map(message=>
         <FlashMessage key={message.id} message={message}/>
        )
        return(
            <div>
                {messags}
            </div>
        )
    }
}

FlashMessagesList.propTypes = {
    messages: PropTypes.array.isRequired
}

function mapStateToProps(state){
    return{
         messages: state.flashMessages
    }
}

export default connect(mapStateToProps)(FlashMessagesList)