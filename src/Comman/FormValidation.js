import React from 'react'

export default function FormValidation(fields,seterrors){

    //arguments fields
    //return errors,formIsValid
    //console.log(fields);
    
    let errors = {}
    let formIsValid = true

    if (!fields['firstname']) {
        formIsValid = false
        errors['firstname'] = '*Please enter your firstname.'
    }

    if (typeof fields['firstname'] !== 'undefined') {
        if (!fields['firstname'].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false
            errors['firstname'] = '*Please enter alphabet characters only.'
        }
    }

    if (!fields['lastname']) {
        formIsValid = false
        errors['lastname'] = '*Please enter your lastname.'
    }

    if (typeof fields['lastname'] !== 'undefined') {
        if (!fields['lastname'].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false
            errors['lastname'] = '*Please enter alphabet characters only.'
        }
    }

    if (!fields['email']) {
        formIsValid = false
        errors['email'] = '*Please enter your email-ID.'
    }

    if (typeof fields['email'] !== 'undefined') {
        //regular expression for email validation
        var pattern = new RegExp(
            /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        )
        if (!pattern.test(fields['email'])) {
            formIsValid = false
            errors['email'] = '*Please enter valid email-ID.'
        }
    }

    if (!fields['department']) {
        formIsValid = false
        errors['department'] = '*Please enter your department.'
    }

    if (typeof fields['department'] !== 'undefined') {
        if (!fields['department'].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false
            errors['department'] = '*Please enter alphabet characters only.'
        }
    }

    if (!fields['mobileno']) {
        formIsValid = false
        errors['mobileno'] = '*Please enter your mobile no.'
    }

    if (typeof fields['mobileno'] !== 'undefined') {
        if (!fields['mobileno'].match(/^[0-9]{10}$/)) {
            formIsValid = false
            errors['mobileno'] = '*Please enter valid mobile no.'
        }
    }

    seterrors({ ...errors })
    return formIsValid
}
