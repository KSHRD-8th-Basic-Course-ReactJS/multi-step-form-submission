import registerFormModel from "./registerFormModel";

const {
    formField: {
        email,
        password,
        firstName,
        lastName,
        bornAddress,
        currentAddress,
        education,
        graduated
    }
} = registerFormModel;

export default {
    [email.name]: '',
    [password.name]: '',
    [firstName.name]: '',
    [lastName.name]: '',
    [bornAddress.name]: '',
    [currentAddress.name]: '',
    [education.name]: '',
    [graduated.name]: false
}