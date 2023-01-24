import SignPageTitle from '../../components/SignPageTitle/SignPageTitle';
import SignInForm from '../../modules/SignInForm/SignInForm';
import SignPageWrapper from '../../components/SignPageWrapper/SignPageWrapper';

function SignInPage() {
    return (
        <SignPageWrapper>
            <SignPageTitle text='Рады видеть!' />
            <SignInForm />
        </SignPageWrapper>
    );
}

export default SignInPage;