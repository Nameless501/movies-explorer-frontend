import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../../../contexts/UserContext';
import { routesConfig, profileErrorsConfig } from '../../../utils/configs';
import * as MainAPI from '../../../utils/MainAPI';
import HeaderMain from '../../modules/HeaderMain/HeaderMain';
import ProfileForm from '../../modules/ProfileForm/ProfileForm';
import Portal from '../../components/Portal/Portal';
import InfoTooltip from '../../components/InfoTooltip/InfoTooltip';
import './ProfilePage.css';

function ProfilePage() {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [modalIsOpen, setModalState] = useState(false);

    const { userData, setCurrentUser, removeCurrentUser } = useUserContext();
    const history = useHistory();

    function handleSignOut() {
        setIsLoading(true);

        MainAPI.signOut()
            .then(() => removeCurrentUser())
            .then(() => {
                localStorage.clear();
                sessionStorage.clear();
            })
            .then(() => history.push(routesConfig.main))
            .catch(err => setError(profileErrorsConfig[err]))
            .finally(() => setIsLoading(false));
    }

    function handleDataChange(inputsValues) {
        setIsLoading(true);

        MainAPI.setUserData(inputsValues)
            .then(setCurrentUser)
            .then(() => setModalState(true))
            .catch(err => setError(profileErrorsConfig[err]))
            .finally(() => setIsLoading(false));
    }

    function handleClosePopup() {
        setModalState(false);
    };

    return (
        <>
            <div className='profile-page' >
                <HeaderMain />
                <main className='profile-page__content' >
                    <h2 className='profile-page__title' >
                        {`Привет, ${userData?.name || ''}!`}
                    </h2>
                    <ProfileForm
                        handleSignOut={handleSignOut}
                        handleDataChange={handleDataChange}
                        fetchError={error}
                        isLoading={isLoading}
                    />
                </main>
            </div>
            {modalIsOpen &&
                    <InfoTooltip
                        handleClose={handleClosePopup}
                    />
            }
        </>
    );
}

export default ProfilePage;