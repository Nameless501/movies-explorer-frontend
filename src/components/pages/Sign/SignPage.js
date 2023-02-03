import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useUserContext } from '../../../contexts/UserContext';
import SignPageTitle from '../../components/SignPageTitle/SignPageTitle';
import SignInForm from '../../modules/SignInForm/SignInForm';
import SignUpForm from '../../modules/SignUpForm/SignUpForm';
import SignPageWrapper from '../../components/SignPageWrapper/SignPageWrapper';
import * as MainAPI from '../../../utils/MainAPI';
import { routesConfig, signInErrorsConfig, signUpErrorsConfig } from '../../../utils/configs';

function SignPage() {
    const [error, setError] = useState({ signIn: '', signUp: '' });
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation();
    const history = useHistory();

    const { setCurrentUser } = useUserContext();

    function handleSignIn(inputsValues) {
        setIsLoading(true);

        MainAPI.signIn(inputsValues)
            .then(setCurrentUser)
            .then(() => history.push(routesConfig.movies))
            .catch(err => {
                setError((current) => ({
                    ...current,
                    signIn: signInErrorsConfig[err],
                }));

                if (location.pathname !== routesConfig.signIn) {
                    history.push(routesConfig.signIn);
                }
            })
            .finally(() => setIsLoading(false));
    }

    function handleSignUp(inputsValues) {
        setIsLoading(true);

        MainAPI.signUp(inputsValues)
            .then(() => handleSignIn(inputsValues))
            .catch(err => setError((current) => ({
                ...current,
                signUp: signUpErrorsConfig[err],
            })))
            .finally(() => setIsLoading(false));
    }

    return (
        <SignPageWrapper>
            {location.pathname === routesConfig.signUp &&
                <>
                    <SignPageTitle text='Добро пожаловать!' />
                    <SignUpForm
                        handleSubmit={handleSignUp}
                        isLoading={isLoading}
                        error={error.signUp}
                    />
                </>
            }
            {location.pathname === routesConfig.signIn &&
                <>
                    <SignPageTitle text='Рады видеть!' />
                    <SignInForm
                        handleSubmit={handleSignIn}
                        isLoading={isLoading}
                        error={error.signIn}
                    />
                </>
            }
        </SignPageWrapper>
    );
}

export default SignPage;