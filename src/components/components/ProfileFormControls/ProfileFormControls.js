import SignFormButton from '../../UI/SignFormButton/SignFormButton';
import SignOutButton from '../../UI/SignOutButton/SignOutButton';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './ProfileFormControls.css';

function ProfileFormControls({ valueNotChanged, formIsValid, error, handleSignOut }) {
    return (
            <div className='profile-form-controls' >
                <ErrorMessage
                    text={error}
                    place='profile-form'
                />
                {(valueNotChanged || !formIsValid) ?
                    <>
                        <p className='profile-form-controls__text' >
                            Редактировать
                        </p>
                        <SignOutButton
                            handleClick={handleSignOut}
                        />
                    </>
                    :
                    <SignFormButton
                        text='Сохранить'
                    />
                }
            </div>
    );
}

export default ProfileFormControls;