import { useUserContext } from '../../../contexts/UserContext';
import HeaderMain from '../../modules/HeaderMain/HeaderMain';
import ProfileForm from '../../modules/ProfileForm/ProfileForm';
import './ProfilePage.css';

function ProfilePage() {
    const { userData } = useUserContext();

    return (
        <div className='profile-page' >
            <HeaderMain />
            <main className='profile-page__content' >
                <h2 className='profile-page__title' >
                    {`Привет, ${userData?.name || ''}!`}
                </h2>
                <ProfileForm />
            </main>
        </div>
    );
}

export default ProfilePage;