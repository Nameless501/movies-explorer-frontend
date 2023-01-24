import Logo from '../../UI/Logo/Logo';
import './SignPageTitle.css';

function SignPageTitle({ text }) {
    return (
        <div className='sign-page-title' >
            <Logo />
            <h2 className='sign-page-title__text' >
                {text}
            </h2>
        </div>
    );
}

export default SignPageTitle;