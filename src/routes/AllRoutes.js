import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import Signup from '../components/Signup'
function AllRoutes() {

    return(
        <>
            <Router>
                <Switch>
                    <Route exact path='/signup' component={Signup} />
                </Switch>
            </Router>
        </>
    )
}

export default AllRoutes