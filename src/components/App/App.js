import { Switch, Route } from 'react-router-dom';
import { routesConfig } from '../../utils/configs';
import { CurrentUserProvider } from '../../contexts/UserContext';
import { UserMoviesProvider } from '../../contexts/UserMoviesContext';
import ProtectedRoute from '../pages/ProtectedRoute/ProtectedRoute';
import LandingPage from '../pages/Landing/LandingPage';
import MoviesPage from '../pages/Movies/MoviesPage';
import SavedMoviesPage from '../pages/SavedMovies/SavedMoviesPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import SignPage from '../pages/Sign/SignPage';
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
                    <ProtectedRoute path={routesConfig.movies}>
                        <UserMoviesProvider>
                            <MoviesPage />
                        </UserMoviesProvider>
                    </ProtectedRoute>
                    <ProtectedRoute path={routesConfig.savedMovies}>
                        <UserMoviesProvider>
                            <SavedMoviesPage />
                        </UserMoviesProvider>
                    </ProtectedRoute>
                    <ProtectedRoute path={routesConfig.profile}>
                        <ProfilePage />
                    </ProtectedRoute>
                    <Route path={routesConfig.signIn}>
                        <SignPage />
                    </Route>
                    <Route path={routesConfig.signUp}>
                        <SignPage />
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
