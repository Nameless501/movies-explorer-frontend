import SignFormWrapper from '../../components/SignFormWrapper/SignFormWrapper';
import FormInput from '../../components/FormInput/FormInput';

function SignInForm() {
    return (
        <SignFormWrapper type='sign-in' >
            <FormInput
                label='E-mail'
                type='email'
                name='email'
                required={true}
                place='form'
            />
            <FormInput
                label='Пароль'
                type='password'
                name='password'
                required={true}
                place='form'
            />
        </SignFormWrapper>
    );
}

export default SignInForm;