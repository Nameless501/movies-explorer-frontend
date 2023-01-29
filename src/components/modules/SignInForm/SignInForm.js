import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as MainAPI from '../../../utils/MainAPI';
import useFormValidation from '../../../hooks/useFormValidation';
import useFormDataCollect from '../../../hooks/useFormDataCollect';
import { useUserContext } from '../../../contexts/UserContext';
import SignFormWrapper from '../../components/SignFormWrapper/SignFormWrapper';
import FormInput from '../../components/FormInput/FormInput';
import { routesConfig } from '../../../utils/configs';

function SignInForm() {
    const { inputsValues, handleInputChange, resetInputsValues } = useFormDataCollect();
    const { formIsValid, errorMessages, handleValidation, resetFormValidation } = useFormValidation();
    const { setCurrentUser } = useUserContext();
    const history = useHistory();

    function handleSignIn() {
        MainAPI.signIn(inputsValues)
        .then(setCurrentUser)
        .then(() => history.push(routesConfig.movies))
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
            type='sign-in'
            submitHandler={handleSignIn}
            isValid={formIsValid}
        >
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

export default SignInForm;