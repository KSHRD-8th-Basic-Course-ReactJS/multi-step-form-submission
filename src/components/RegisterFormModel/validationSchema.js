import * as Yup from 'yup';
import moment from 'moment';

import registerFormModel from './registerFormModel';

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

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

const emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default [
    Yup.object().shape({
        [email.name]: Yup.string()
            .required(`${email.requiredErrorMsg}`)
            .matches(emailRegEx, email.invalidErrorMsg),
        [password.name]: Yup.string().required(`${password.requiredErrorMsg}`)
    }),


    // Yup.object().shape({
    //     [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
    //     [cardNumber.name]: Yup.string()
    //         .required(`${cardNumber.requiredErrorMsg}`)
    //         .matches(visaRegEx, cardNumber.invalidErrorMsg),
    //     [expiryDate.name]: Yup.string()
    //         .nullable()
    //         .required(`${expiryDate.requiredErrorMsg}`)
    //         .test('expDate', expiryDate.invalidErrorMsg, val => {
    //             if (val) {
    //                 const startDate = new Date();
    //                 const endDate = new Date(2050, 12, 31);
    //                 console.log(val);
    //                 if (moment(val, moment.ISO_8601).isValid()) {
    //                     return moment(val).isBetween(startDate, endDate);
    //                 }
    //                 return false;
    //             }
    //             return false;
    //         }),
    //     [cvv.name]: Yup.string()
    //         .required(`${cvv.requiredErrorMsg}`)
    //         .test('len', `${cvv.invalidErrorMsg}`, val => val && val.length === 3)
    // })
];