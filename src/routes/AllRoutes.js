import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Signup from '../components/Signup'
import Login from '../components/Login'
// import Dashboard from '../components/Dashboard'
function AllRoutes() {

    return(
        <>
            <Router>
                <Switch>
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/login' component={Login} />
                    {/* <Route exact path='/:username' component={Dashboard} /> */}
                </Switch>
            </Router>
        </>
    )
}

export default AllRoutes