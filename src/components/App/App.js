import { Switch, Route } from 'react-router-dom';
import { routesConfig } from '../../utils/configs';
import { CurrentUserProvider } from '../../contexts/UserContext';
import { UserMoviesProvider } from '../../contexts/UserMoviesContext';
import LandingPage from '../pages/Landing/LandingPage';
import MoviesPage from '../pages/Movies/MoviesPage';
import SavedMoviesPage from '../pages/SavedMovies/SavedMoviesPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import SignInPage from '../pages/SignIn/SignInPage';
import SignUpPage from '../pages/SignUp/SignUpPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import './App.css';

function App() {
    return (
        <div className="App">
            <CurrentUserProvider>
                <Switch>
                    <Route exact path={routesConfig.main}>
                        <LandingPage />
                    </Route>
                    <UserMoviesProvider>
                        <Route path={routesConfig.movies}>
                            <MoviesPage />
                        </Route>
                        <Route path={routesConfig.savedMovies}>
                            <SavedMoviesPage />
                        </Route>
                    </UserMoviesProvider>
                    <Route path={routesConfig.profile}>
                        <ProfilePage />
                    </Route>
                    <Route path={routesConfig.signIn}>
                        <SignInPage />
                    </Route>
                    <Route path={routesConfig.signUp}>
                        <SignUpPage />
                    </Route>
                    <Route path='*' >
                        <NotFoundPage />
                    </Route>
                </Switch>
            </CurrentUserProvider>
        </div >
    );
}

export default App;
