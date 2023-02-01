import { useEffect } from 'react';
import useFormStateAndValidation from '../../../hooks/useFormStateAndValidation';
import SignFormWrapper from '../../components/SignFormWrapper/SignFormWrapper';
import FormInput from '../../components/FormInput/FormInput';
import { PATTERN_NAME } from '../../../utils/constants';

function SignUpForm({ handleSubmit, error }) {
    const { inputsValues, errorMessages, formIsValid, handleInputChange, resetFormValues } = useFormStateAndValidation();

    function onSubmit(evt) {
        evt.preventDefault();
        handleSubmit(inputsValues);
    }

    useEffect(() => {
        return () => {
            resetFormValues();
        }
    }, [resetFormValues]);

    return (
        <SignFormWrapper
            type='sign-up'
            onSubmit={onSubmit}
            isValid={formIsValid}
            error={error}
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
                pattern={PATTERN_NAME}
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