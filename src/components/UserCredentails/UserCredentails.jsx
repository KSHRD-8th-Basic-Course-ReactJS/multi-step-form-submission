import InputField from "../FormModel/InputField";

export default function UserCredentails(props) {
    const {
        formField: {
            email,
            password,
        }
    } = props;

    return (
        <div>
            <InputField
                name={email.name}
                label={email.label}
            />
            <InputField
                name={password.name}
                label={password.label}
            />
        </div>
    )
}