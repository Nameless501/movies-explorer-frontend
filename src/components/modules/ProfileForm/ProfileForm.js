import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../../../contexts/UserContext';
import * as MainAPI from '../../../utils/MainAPI';
import useFormStateAndValidation from '../../../hooks/useFormStateAndValidation';
import { routesConfig, profileErrorsConfig } from '../../../utils/configs';
import ProfileInput from '../../components/ProfileInput/ProfileInput';
import ProfileFormControls from '../../components/ProfileFormControls/ProfileFormControls';
import './ProfileForm.css';

function ProfileForm() {
    const { userData, setCurrentUser, removeCurrentUser } = useUserContext();
    const { inputsValues, formIsValid, errorMessages, handleInputChange, setErrorMessage, resetFormValues } = useFormStateAndValidation();
    const history = useHistory();

    useLayoutEffect(() => {
        resetFormValues(userData);
    }, [userData, resetFormValues]);

    function handleSignOut() {
        MainAPI.signOut()
        .then(() => removeCurrentUser())
        .then(() => {
            localStorage.clear();
            sessionStorage.clear();
        })
        .then(() => history.push(routesConfig.signIn))
        .catch(err => setErrorMessage({ form: profileErrorsConfig.signOut }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        MainAPI.setUserData(inputsValues)
        .then(setCurrentUser)
        .catch(err => setErrorMessage({ form: profileErrorsConfig[err] }));
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
                    required={true}
                    error={errorMessages.name}
                    value={inputsValues.name || ''}
                    handleChange={handleInputChange}
                />
                <ProfileInput
                    type='email'
                    name='email'
                    id='email-input'
                    label='E-mail'
                    place='profile'
                    required={true}
                    error={errorMessages.email}
                    value={inputsValues.email || ''}
                    handleChange={handleInputChange}
                />
            </fieldset>
            <ProfileFormControls
                valueNotChanged={(inputsValues.name === userData.name) && (inputsValues.email === userData.email)}
                handleSignOut={handleSignOut}
                formIsValid={formIsValid}
                error={errorMessages.form}
            />
        </form>
    );
}

export default ProfileForm;