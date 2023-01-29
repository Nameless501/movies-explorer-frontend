import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as MainAPI from '../../../utils/MainAPI';
import useFormValidation from '../../../hooks/useFormValidation';
import useFormDataCollect from '../../../hooks/useFormDataCollect';
import { routesConfig } from '../../../utils/configs';
import SignFormWrapper from '../../components/SignFormWrapper/SignFormWrapper';
import FormInput from '../../components/FormInput/FormInput';

function SignUpForm() {
    const { inputsValues, handleInputChange, resetInputsValues } = useFormDataCollect();
    const { formIsValid, errorMessages, handleValidation, resetFormValidation } = useFormValidation();
    const history = useHistory();

    function handleSignUp() {
        MainAPI.signUp(inputsValues)
            .then(() => history.push(routesConfig.signIn))
            .catch(err => console.log(err));
    }

    function handleChange(evt) {
        handleValidation(evt);
        handleInputChange(evt);
    }

    useEffect(() => {
        return () => {
            resetInputsValues();
            resetFormValidation();
        }
    }, [resetInputsValues, resetFormValidation]);

    return (
        <SignFormWrapper
            type='sign-up'
            submitHandler={handleSignUp}
            isValid={formIsValid}
        >
            <FormInput
                label='Имя'
                type='text'
                name='name'
                required={true}
                place='form'
                errorMessage={errorMessages.name}
                value={inputsValues.name}
                handleChange={handleChange}
            />
            <FormInput
                label='E-mail'
                type='email'
                name='email'
                required={true}
                place='form'
                errorMessage={errorMessages.email}
                value={inputsValues.email}
                handleChange={handleChange}
            />
            <FormInput
                label='Пароль'
                type='password'
                name='password'
                required={true}
                place='form'
                errorMessage={errorMessages.password}
                value={inputsValues.password}
                handleChange={handleChange}
            />
        </SignFormWrapper>
    );
}

export default SignUpForm;