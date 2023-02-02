import { useLayoutEffect } from 'react';
import { useUserContext } from '../../../contexts/UserContext';
import useFormStateAndValidation from '../../../hooks/useFormStateAndValidation';
import ProfileInput from '../../components/ProfileInput/ProfileInput';
import ProfileFormControls from '../../components/ProfileFormControls/ProfileFormControls';
import { PATTERN_NAME } from '../../../utils/constants';
import './ProfileForm.css';

function ProfileForm({ handleSignOut, handleDataChange, fetchError, isLoading }) {
    const { userData } = useUserContext();
    const { inputsValues, formIsValid, errorMessages, handleInputChange, resetFormValues } = useFormStateAndValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        handleDataChange(inputsValues);
    }

    useLayoutEffect(() => {
        resetFormValues(userData);
    }, [userData, resetFormValues]);

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
                    pattern={PATTERN_NAME}
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
                disabled={!formIsValid || isLoading}
                error={fetchError}
            />
        </form>
    );
}

export default ProfileForm;