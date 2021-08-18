export default {
    formId: 'registerForm',
    formField: {
        email: {
            name: 'email',
            label: 'Email*',
            requiredErrorMsg: 'Email is required',
            invalidErrorMsg: 'Email is not correct syntax'
        },
        password: {
            name: 'password',
            label: 'Password*',
            requiredErrorMsg: 'Password is required',
            invalidErrorMsg: 'Password is not correct syntax'
        },
        firstName: {
            name: 'firstName',
            label: 'First name*',
            requiredErrorMsg: 'First name is required'
        },
        lastName: {
            name: 'lastName',
            label: 'Last name*',
            requiredErrorMsg: 'Last name is required'
        },
        bornAddress: {
            name: 'bornAddress',
            label: 'Born Address*',
            requiredErrorMsg: 'Born Address is required'
        },
        currentAddress: {
            name: 'currentAddress',
            label: 'Current Address*',
            requiredErrorMsg: 'Current Address is required'
        },
        education: {
            name: 'education',
            label: 'Education*',
            requiredErrorMsg: 'Education is required'
        },
        graduated: {
            name: 'graduated',
            label: 'Are you graduated from University?'
        },
    }
};