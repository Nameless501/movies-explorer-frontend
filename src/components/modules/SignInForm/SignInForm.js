import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as MainAPI from '../../../utils/MainAPI';
import useFormStateAndValidation from '../../../hooks/useFormStateAndValidation';
import { useUserContext } from '../../../contexts/UserContext';
import SignFormWrapper from '../../components/SignFormWrapper/SignFormWrapper';
import FormInput from '../../components/FormInput/FormInput';
import { routesConfig, signInErrorsConfig } from '../../../utils/configs';

function SignInForm() {
    const { inputsValues, errorMessages, formIsValid, handleInputChange, setErrorMessage, resetFormValues } = useFormStateAndValidation();
    const { setCurrentUser } = useUserContext();
    const history = useHistory();

    function handleSignIn() {
        MainAPI.signIn(inputsValues)
        .then(setCurrentUser)
        .then(() => history.push(routesConfig.movies))
        .catch(err => setErrorMessage({ form: signInErrorsConfig[err] }));
    }

    useEffect(() => {
        return () => {
            resetFormValues();
        }
    }, [resetFormValues]);

    return (
        <SignFormWrapper
            type='sign-in'
            submitHandler={handleSignIn}
            isValid={formIsValid}
            error={errorMessages.form}
        >
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

export default SignInForm;