import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Signup from '../components/Signup'
import Login from '../components/Login'
import Profile from '../components/Profile'
function AllRoutes() {
    return(
        <>
            <Router>
                <Switch>
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/:username' component={Profile} />
                </Switch>
            </Router>
        </>
    )
}

export default AllRoutes