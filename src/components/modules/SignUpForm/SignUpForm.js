import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as MainAPI from '../../../utils/MainAPI';
import useFormStateAndValidation from '../../../hooks/useFormStateAndValidation';
import { routesConfig, signUpErrorsConfig } from '../../../utils/configs';
import SignFormWrapper from '../../components/SignFormWrapper/SignFormWrapper';
import FormInput from '../../components/FormInput/FormInput';

function SignUpForm() {
    const { inputsValues, errorMessages, formIsValid, handleInputChange, setErrorMessage, resetFormValues } = useFormStateAndValidation();
    const history = useHistory();

    function handleSignUp() {
        MainAPI.signUp(inputsValues)
            .then(() => history.push(routesConfig.signIn))
            .catch(err => setErrorMessage({ form: signUpErrorsConfig[err] }));
    }

    useEffect(() => {
        return () => {
            resetFormValues();
        }
    }, [resetFormValues]);

    return (
        <SignFormWrapper
            type='sign-up'
            submitHandler={handleSignUp}
            isValid={formIsValid}
            error={errorMessages.form}
        >
            <FormInput
                label='Имя'
                type='text'
                name='name'
                required={true}
                place='form'
                errorMessage={errorMessages.name}
                value={inputsValues.name}
                handleChange={handleInputChange}
            />
            <FormInput
                label='E-mail'
                type='email'
                name='email'
                required={true}
                place='form'
                errorMessage={errorMessages.email}
                value={inputsValues.email}
                handleChange={handleInputChange}
            />
            <FormInput
                label='Пароль'
                type='password'
                name='password'
                required={true}
                place='form'
                errorMessage={errorMessages.password}
                value={inputsValues.password}
                handleChange={handleInputChange}
            />
        </SignFormWrapper>
    );
}

export default SignUpForm;