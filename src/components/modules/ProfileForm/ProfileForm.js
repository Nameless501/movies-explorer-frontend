import { useHistory } from 'react-router-dom';
import { useUserContext } from '../../../contexts/UserContext';
import * as MainAPI from '../../../utils/MainAPI';
import useFormDataCollect from '../../../hooks/useFormDataCollect';
import { routesConfig } from '../../../utils/configs';
import ProfileInput from '../../components/ProfileInput/ProfileInput';
import ProfileFormControls from '../../components/ProfileFormControls/ProfileFormControls';
import './ProfileForm.css';

function ProfileForm() {
    const { userData, setCurrentUser, removeCurrentUser } = useUserContext();
    const { inputsValues, handleInputChange } = useFormDataCollect(userData);
    const history = useHistory();

    function handleSignOut() {
        MainAPI.signOut()
        .then(() => removeCurrentUser())
        .then(() => history.push(routesConfig.signIn))
        .catch(err => console.log(err));
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        MainAPI.setUserData(inputsValues)
        .then(setCurrentUser)
        .catch(err => console.log(err));
    }

    return (
        <form
            className='profile-form'
            onSubmit={handleSubmit}
        >
            <fieldset className='profile-form__fieldset' >
                <ProfileInput
                    name='name'
                    id='name-input'
                    label='Имя'
                    place='profile'
                    value={inputsValues.name}
                    handleChange={handleInputChange}
                />
                <ProfileInput
                    type='email'
                    name='email'
                    id='email-input'
                    label='E-mail'
                    place='profile'
                    value={inputsValues.email}
                    handleChange={handleInputChange}
                />
            </fieldset>
            <ProfileFormControls
                valueChanged={(inputsValues.name === userData.name) && (inputsValues.email === userData.email)}
                handleSignOut={handleSignOut}
            />
        </form>
    );
}

export default ProfileForm;