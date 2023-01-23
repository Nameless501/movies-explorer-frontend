import './SignButton.css';

function SignButton({ classType, text }) {
    return (
        <button
            type='button'
            className={`
                sign-button
                ${classType ? 'sign-button_type_' + classType : null}
            `}
        >
            {text}
        </button>
    );
}

export default SignButton;