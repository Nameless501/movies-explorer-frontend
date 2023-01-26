import './SignFormButton.css';

function SignFormButton({ text }) {
    return (
        <button
            className='sign-form-button'
            type='submit'
        >
            {text}
        </button>
    );
}

export default SignFormButton;