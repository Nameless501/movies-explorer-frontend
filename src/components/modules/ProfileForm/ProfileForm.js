import { useState } from 'react';
import ProfileInput from '../../components/ProfileInput/ProfileInput';
import ProfileFormControls from '../../components/ProfileFormControls/ProfileFormControls';
import { CURRENT_USER_EMAIL, CURRENT_USER_NAME } from '../../../utils/constants';
import './ProfileForm.css';

function ProfileForm() {
    const [inputsValue, setInputsValue] = useState({ name: CURRENT_USER_NAME, email: CURRENT_USER_EMAIL });

    function handleChange(evt) {
        const { name, value } = evt.target;
        setInputsValue(current => ({
            ...current,
            [name]: value,
        }))
    }

    return (
        <form className='profile-form' >
            <fieldset className='profile-form__fieldset' >
                <ProfileInput
                    name='name'
                    id='name-input'
                    label='Имя'
                    place='profile'
                    value={inputsValue.name}
                    handleChange={handleChange}
                />
                <ProfileInput
                    type='email'
                    name='email'
                    id='email-input'
                    label='E-mail'
                    place='profile'
                    value={inputsValue.email}
                    handleChange={handleChange}
                />
            </fieldset>
            <ProfileFormControls
                valueChanged={(inputsValue.name === CURRENT_USER_NAME) && (inputsValue.email === CURRENT_USER_EMAIL)}
            />
        </form>
    );
}

export default ProfileForm;