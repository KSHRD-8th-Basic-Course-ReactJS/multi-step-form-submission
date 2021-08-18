import InputField from "../FormModel/InputField";

export default function UserDetails(props) {
    const {
        formField: {
            firstName,
            lastName,
        }
    } = props;
    return (
        <div>
            <InputField
                name={firstName.name}
                label={firstName.label}
            />
            <InputField
                name={lastName.name}
                label={lastName.label}
            />
        </div>
    )
}