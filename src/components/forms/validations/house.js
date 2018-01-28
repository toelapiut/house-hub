import isEmpty from 'lodash/isEmpty'
import validator from 'validator'

export default function houseValidation(data) {
    let errors = {}

    if(validator.isEmpty(data.house_no)){
        errors.house_no = 'This field is required'
        console.log('username blank');
    }
    if(validator.isEmpty(data.description)){
        errors.description = 'This field is required'
    }
    if(validator.isEmpty(data.price)){
        errors.price = 'This field is required'
    }    
    if(validator.isEmpty(data.tenant_name)){
        errors.tenant_name = 'If none please input zero'
    }    
    if(validator.isEmpty(data.original_id)){
        errors.original_id = 'If none please input zero'
    }    
    if(validator.isEmpty(data.phone_number)){
        errors.phone_number = 'If none please input zero'
    }
    return{
        errors,
        isValid: isEmpty(errors)
    }

}
