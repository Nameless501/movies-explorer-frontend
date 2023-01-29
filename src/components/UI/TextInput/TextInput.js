import './TextInput.css';

function TextInput({ type='text', placeholder, required=false, place, handleChange, value, name, errorMessage }) {
    return (
        <input
            className={`
                text-input
                ${ place ? 'text-input_place_' + place : null }
                ${ errorMessage ? 'text-input_state_error' : null }
            `}
            type={type}
            placeholder={placeholder}
            required={required}
            onChange={handleChange}
            value={value || ''}
            name={name}
        />
    );
}

export default TextInput;