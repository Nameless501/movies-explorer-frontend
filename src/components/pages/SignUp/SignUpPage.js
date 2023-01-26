import SignPageTitle from '../../components/SignPageTitle/SignPageTitle';
import SignUpForm from '../../modules/SignUpForm/SignUpForm';
import SignPageWrapper from '../../components/SignPageWrapper/SignPageWrapper';

function SignUpPage() {
    return (
        <SignPageWrapper>
            <SignPageTitle text='Добро пожаловать!' />
            <SignUpForm />
        </SignPageWrapper>
    );
}

export default SignUpPage;