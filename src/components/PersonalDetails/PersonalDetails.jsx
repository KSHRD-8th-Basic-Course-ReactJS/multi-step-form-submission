import CheckboxField from "../FormModel/CheckboxField";
import InputField from "../FormModel/InputField";

export default function PersonalDetails(props) {
    const {
        formField: {
            education,
            graduated
        }
    } = props;
    return (
        <div>
            <InputField
                name={education.name}
                label={education.label}
            />
            <CheckboxField 
                name={graduated.name}
                label={graduated.label}
            />
        </div>
    )
}