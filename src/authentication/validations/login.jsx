import isEmpty from 'lodash/isEmpty'
import validator from 'validator'

export default function validateInput(data) {
    let errors = {}

    if(validator.isEmpty(data.username)){
        errors.username = 'This field is required'
        console.log('username blank');
    }
    if(validator.isEmpty(data.password)){
        errors.password = 'This field is required'
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }

}
