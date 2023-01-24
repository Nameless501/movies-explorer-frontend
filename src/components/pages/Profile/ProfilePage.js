import HeaderMain from '../../modules/HeaderMain/HeaderMain';
import ProfileForm from '../../modules/ProfileForm/ProfileForm';
import { CURRENT_USER_NAME } from '../../../utils/constants';
import './ProfilePage.css';

function ProfilePage() {
    return (
        <div className='profile-page' >
            <HeaderMain />
            <main className='profile-page__content' >
                <h2 className='profile-page__title' >
                    {`Привет, ${CURRENT_USER_NAME}!`}
                </h2>
                <ProfileForm />
            </main>
        </div>
    );
}

export default ProfilePage;