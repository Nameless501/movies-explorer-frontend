import { Switch, Route } from 'react-router-dom';
import { routesConfig } from '../../utils/configs';
import LandingPage from '../pages/Landing/LandingPage';
import MoviesPage from '../pages/Movies/MoviesPage';
import './App.css';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={routesConfig.main}>
                    <LandingPage />
                </Route>
                <Route path={routesConfig.movies}>
                    <MoviesPage />
                </Route>
                <Route path={routesConfig.savedMovies}>

                </Route>
                <Route path={routesConfig.profile}>

                </Route>
                <Route path={routesConfig.signIn}>

                </Route>
                <Route path={routesConfig.signUp}>

                </Route>
            </Switch>
        </div>
    );
}

export default App;
