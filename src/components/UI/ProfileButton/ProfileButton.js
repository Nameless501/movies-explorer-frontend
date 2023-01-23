import './ProfileButton.css';

function ProfileButton() {
    return (
        <button
            type='button'
            className='profile-button'
        >
            <span className='profile-button__text' >
                Аккаунт
            </span>
            <span className='profile-button__icon' />
        </button>
    );
}

export default ProfileButton;