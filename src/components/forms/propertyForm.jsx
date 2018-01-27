import React, { Component } from 'react';
import addProperty from "../../actions/addProperty.action";
import {connect} from 'react-redux'
import propertyValidation from './validations/property'
import PropTypes from 'prop-types';

class PropertyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            description:'',
            house_count:'',
            gabbage:'',
            security:'',
            cleaning:'',
            tax:'',
            property_type:1,
            errors:{}
        };
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        
      }

      isValid() {
        const {errors, isValid} = propertyValidation(this.state)

        if (!isValid) {
            this.setState({errors})
            }
            return isValid
        }

      onSubmit(e){
        e.preventDefault()
        if (this.isValid()){
            this.setState({errors:{},isLoading:true})
            this.props.addProperty(this.state)

        }
      }
      onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
      }
    
    // state = {  }
    render() {
        const {propertyName,description,house_count,gabbage,security,cleaning,tax,errors} = this.state
        
        return (
            <form onSubmit={this.onSubmit}>
                <div class="form-group">
                <label for="house no">Property name</label>
                
                    <input 
                    value={this.state.name} 
                    onChange={this.onChange.bind(this)}
                    type="text" 
                    name='name'
                    error={errors.name}
                    class="form-control" 
                    id="text"/>
                </div>
                <div class="form-group">
                    <label for="house no">Description</label>
                    <input error={errors.description} name='description' value={this.state.description} onChange={this.onChange.bind(this)} type="text" class="form-control" id="text"/>
                </div>
                <div class="form-group">
                    <label for="house no">House Count</label>
                    <input error={errors.house_count} name='house_count' value={this.state.house_count} onChange={this.onChange.bind(this)} type="number" class="form-control" id="text"/>
                </div>
                <div class="form-group">
                    <label for="pwd">Gabbage</label>
                    <input error={errors.gabbage} name='gabbage' value={this.state.gabbage} onChange={this.onChange.bind(this)} type="number" class="form-control" id="pwd"/>
                </div>
                <div class="form-group">
                    <label for="pwd">Security</label>
                    <input error={errors.security} name='security' value={this.state.security} onChange={this.onChange.bind(this)} type="number" class="form-control" id="pwd"/>
                </div>
                <div class="form-group">
                    <label for="pwd">TAX</label>
                    <input error={errors.tax} name='tax' value={this.state.tax} onChange={this.onChange.bind(this)} type="number" class="form-control" id="pwd"/>
                </div>
                <div class="form-group">
                    <label for="pwd">cleaning</label>
                    <input error={errors.cleaning} name='cleaning' value={this.state.cleaning} onChange={this.onChange.bind(this)} type="number" class="form-control" id="pwd"/>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
            
        );
    }
}

// export default PropertyForm
PropertyForm.propTypes = {
    addProperty: PropTypes.func.isRequired
}


export default connect(null, {addProperty})(PropertyForm)
