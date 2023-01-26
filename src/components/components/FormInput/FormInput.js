import TextInput from '../../UI/TextInput/TextInput';
import './FormInput.css';

function FormInput(props) {
    return (
        <div className='form-input' >
            <label
                htmlFor={props.id}
                className='form-input__label'
            >
                {props.label}
            </label>
            <div className='form-input__input-wrapper' >
                <TextInput {...props} />
                <span className='form-input__error-message' >
                </span>
            </div>
        </div>
    );
}

export default FormInput;