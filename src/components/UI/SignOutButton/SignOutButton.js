import './SignOutButton.css';

function SignOutButton({ handleSignOut }) {
    return (
        <button
            type='button'
            className='sign-out-button'
            onClick={handleSignOut}
        >
            Выйти из аккаунта
        </button>
    );
}

export default SignOutButton;