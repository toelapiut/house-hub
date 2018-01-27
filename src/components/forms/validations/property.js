import isEmpty from 'lodash/isEmpty'
import validator from 'validator'

export default function propertyValidation(data) {
    let errors = {}

    if(validator.isEmpty(data.name)){
        errors.name = 'This field is required'
        console.log('username blank');
    }
    if(validator.isEmpty(data.description)){
        errors.description = 'This field is required'
    }
    if(validator.isEmpty(data.house_count)){
        errors.house_count = 'This field is required'
    }    
    if(validator.isEmpty(data.gabbage)){
        errors.gabbage = 'If none please input zero'
    }    
    if(validator.isEmpty(data.security)){
        errors.security = 'If none please input zero'
    }    
    if(validator.isEmpty(data.cleaning)){
        errors.cleaning = 'If none please input zero'
    }
    if(validator.isEmpty(data.tax)){
        errors.tax = 'If none please input zero'
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }

}
