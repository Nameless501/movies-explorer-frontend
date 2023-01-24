import SignFormButton from '../../UI/SignFormButton/SignFormButton';
import FormLink from '../../components/FormLink/FormLink';
import { routesConfig } from '../../../utils/configs';

import './SignFormWrapper.css';

function SignFormWrapper({ type, children }) {
    return (
        <form className='sign-form' >
            <fieldset className='sign-form__fieldset' >
                {children}
            </fieldset>
            <div className='sign-form__button-wrapper' >
                {type === 'sign-up' &&
                    <>
                        <SignFormButton
                            text='Зарегистрироваться'
                        />
                        <FormLink
                            text='Уже зарегистрированы?'
                            linkText='Войти'
                            to={routesConfig.signIn}
                        />
                    </>
                }
                {type === 'sign-in' &&
                    <>
                        <SignFormButton
                            text='Войти'
                        />
                        <FormLink
                            text='Ещё не зарегистрированы?'
                            linkText='Регистрация'
                            to={routesConfig.signUp}
                        />
                    </>
                }
            </div>
        </form>
    );
}

export default SignFormWrapper;