import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../../../contexts/UserContext";
import { routesConfig } from "../../../utils/configs.js";

function ProtectedRoute ({ path, children }) {
    const { userIsLogged } = useUserContext();

    return (
        <Route path={path} >
            {() => userIsLogged ? children : <Redirect to={routesConfig.signIn} />}
        </Route>
    );
};

export default ProtectedRoute;