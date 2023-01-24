import SignFormButton from '../../UI/SignFormButton/SignFormButton';
import SignOutButton from '../../UI/SignOutButton/SignOutButton';
import './ProfileFormControls.css';

function ProfileFormControls({ valueChanged, handleSignOut }) {
    return (
            <div className='profile-form-controls' >
                {valueChanged ?
                    <>
                        <p className='profile-form-controls__text' >
                            Редактировать
                        </p>
                        <SignOutButton />
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