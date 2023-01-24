import SignFormWrapper from '../../components/SignFormWrapper/SignFormWrapper';
import FormInput from '../../components/FormInput/FormInput';

function SignUpForm() {
    return (
        <SignFormWrapper type='sign-up' >
            <FormInput
                label='Имя'
                type='text'
                name='name'
                required={true}
                place='form'
            />
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

export default SignUpForm;