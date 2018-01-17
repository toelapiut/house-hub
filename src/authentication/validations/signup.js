import isEmpty from 'lodash/isEmpty'
import validator from 'validator'


export default function validateInput(data) {
    let errors = {}

    if(validator.isEmpty(data.username)){
        errors.username = 'This field is required'
        console.log('username blank');
    }
    if(!validator.isEmail(data.email)){
        errors.email = 'Email is invalid'
    }
    if(validator.isEmpty(data.email)){
        errors.email = 'This field is required'
    }
    if(validator.isEmpty(data.password)){
        errors.password = 'This field is required'
    }
    if(validator.isEmpty(data.password2)){
        errors.password2 = 'This field is required'
    }
    if(!validator.equals(data.password,data.password2)){
        errors.password2 = 'Passwords must match'
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }

}
