import React from "react";
import {Button} from "react-bootstrap";
import PropTypes from "prop-types";
import PropertyAction from "./../../actions/propertyAct"
class Property extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ""};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmission = this
            .handleFormSubmission
            .bind(this);
       
    }

    // created an event handler to handle state
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    //created an event handler 
    handleFormSubmission(event){
        event.preventDefault();
        
        const {_propertyname,_description}=this.refs;

      
        
        PropertyAction({"name":_propertyname.value,"descrition":_description.value,"property_type":this.state.value});


        
    }



    render() {
        


        return (
                <form onSubmit={this.handleFormSubmission} >
                    <label htmlFor="playersName">Property Name</label> 
                    <input 
                        ref="_propertyname"
                        type="text"
                        placeholder="propertyname"
                        id="propertyname"
                        label="Property Name"
                        className="form-control"

                    />
                      <label htmlFor="description">Description</label>
                    <input 
                        ref="_description"
                        type="text"
                        placeholder="description"
                        id="description"
                        label="description"
                        className="form-control"

                    />
                <label htmlFor="gender">Property</label>
                <select
                    ref="selected"
                    className="form-control"
                    id="gender"
                    placeholder="select"
                    value={this.state.value}
                    onChange={this.handleChange}>
                    <option value="">select</option>
                    <option value="1">Flats</option>
                    <option value="2">BungaLow</option>
                </select>
                    <br/>
                    <Button 
                        bsStyle="primary"
                        bsSize="small"
                        type="submit">
                        Submit
                    </Button>
                </form>
        );
    }
}


export default Property;