import { Stepper, Step, StepLabel, Button, CircularProgress } from "@material-ui/core";
import registerFormModel from "../components/RegisterFormModel/registerFormModel"
import UserCredentails from "../components/UserCredentails/UserCredentails"
import UserDetails from "../components/UserDetails/UserDetails";
import { useState } from "react";
import { Form, Formik } from "formik";
import validationSchema from "../components/RegisterFormModel/validationSchema";
import formInitialValues from "../components/RegisterFormModel/formInitialValues";
import PersonalDetails from "../components/PersonalDetails/PersonalDetails";

const steps = ["User Credentails", "User Details", "Personal Details"]
const { formId, formField } = registerFormModel;

function renderStepContent(step) {
    switch (step) {
        case 0:
            return <UserCredentails formField={formField} />
        case 1:
            return <UserDetails formField={formField} />
        case 2:
            return <PersonalDetails formField={formField} />
        default:
            return <div>Not Found</div>
    }
}

export default function Register() {
    const [activeStep, setActiveStep] = useState(0);

    const currentValidationSchema = validationSchema[activeStep];

    const isLastStep = activeStep === steps.length - 1;

    function _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function _submitForm(values, actions) {
        await _sleep(1000);
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);

        setActiveStep(activeStep + 1);
    }

    function _handleSubmit(values, actions) {
        if (isLastStep) {
            _submitForm(values, actions);
        } else {
            setActiveStep(activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    }

    function _handleBack() {
        setActiveStep(activeStep - 1);
    }

    return (
        <div>
            <Stepper activeStep={activeStep}>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <h1>Success</h1>
                ) : (
                    <Formik
                        initialValues={formInitialValues}
                        validationSchema={currentValidationSchema}
                        onSubmit={_handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form id={formId}>
                                {renderStepContent(activeStep)}

                                <div>
                                    {activeStep !== 0 && (
                                        <Button onClick={_handleBack}>
                                            Back
                                        </Button>
                                    )}
                                    <div>
                                        <Button
                                            disabled={isSubmitting}
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                        >
                                            {isLastStep ? 'Submit' : 'Next'}
                                        </Button>
                                        {isSubmitting && (
                                            <CircularProgress
                                                size={24}
                                            />
                                        )}
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                )}
            </div>
        </div>
    )
}