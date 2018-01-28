import React, { Component } from 'react';
import addHouse from "../../actions/addHouse.action";
import {connect} from 'react-redux'
import houseValidation from './validations/house'
import PropTypes from 'prop-types';

class HouseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            house_property:'',
            house_no:'',
            description:'',
            price:'',
            tenant_name:'',
            original_id:'',
            phone_number:'',
            property_types:1,
            errors:{}
        };
        this.onSubmit = this.onSubmit.bind(this)
      }

      componentWillReceiveProps(nextProps){
        this.setState({house_property:nextProps.house_property})
        console.log('====================================');
        console.log("component will houseform reeiveprops",nextProps.house_property);
        console.log('====================================');
        
      }

      isValid() {
        const {errors, isValid} = houseValidation(this.state)

        if (!isValid) {
            this.setState({errors})
            }
            return isValid
        }

      onSubmit(e){
        e.preventDefault()
        if (this.isValid()){
            this.setState({errors:{},isLoading:true})
            console.log('====================================');
            console.log('OnSubmit function:state about to be pushed to api post',this.state);
            console.log('====================================');
            this.props.addHouse(this.state)

        }
      }
      onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
      }
    
    // state = {  }
    render() {
        const {house_no,description,price,tenant_name,original_id,phone_number,errors} = this.state
        const { propertyId } = this.props
        console.log("houseform prps",propertyId)
        return (
            <form onSubmit={this.onSubmit}>
                <div class="form-group">
                <label for="house no">House Number</label>
                
                    <input 
                    value={this.state.house_no} 
                    onChange={this.onChange.bind(this)}
                    type="text" 
                    name='house_no'
                    error={errors.house_no}
                    class="form-control" 
                    id="text"/>
                </div>
                <div class="form-group">
                    <label for="house no">Description</label>
                    <input error={errors.description} name='description' value={this.state.description} onChange={this.onChange.bind(this)} type="text" class="form-control" id="text"/>
                </div>
                <div class="form-group">
                    <label for="house no">Rent Amount</label>
                    <input error={errors.price} name='price' value={this.state.price} onChange={this.onChange.bind(this)} type="number" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="pwd">Tenant Name</label>
                    <input error={errors.tenant_name} name='tenant_name' value={this.state.tenant_name} onChange={this.onChange.bind(this)} type="text" class="form-control" id="pwd"/>
                </div>
                <div class="form-group">
                    <label for="pwd">Identification Card</label>
                    <input error={errors.original_id} name='original_id' value={this.state.original_id} onChange={this.onChange.bind(this)} type="number" class="form-control" id="pwd"/>
                </div>
                <div class="form-group">
                    <label for="pwd">Phone Number</label>
                    <input error={errors.phone_number} name='phone_number' value={this.state.phone_number} onChange={this.onChange.bind(this)} type="number" class="form-control" id="pwd"/>
                </div>
                {/* <div class="form-group">
                    <label for="pwd">cleaning</label>
                    <input error={errors.cleaning} name='cleaning' value={this.state.cleaning} onChange={this.onChange.bind(this)} type="number" class="form-control" id="pwd"/>
                </div> */}
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
            
        );
    }
}

// export default PropertyForm
HouseForm.propTypes = {
    addHouse: PropTypes.func.isRequired

}
const mapStateToProp = state => {
    // var x = state.propertyData.data.id
    // console.log("house form props x",x)
    return {
        house_property: state.propertyData.data.id
    //   payments: state.paymentsData.data
      
    }
  }

export default connect(mapStateToProp, {addHouse})(HouseForm)
