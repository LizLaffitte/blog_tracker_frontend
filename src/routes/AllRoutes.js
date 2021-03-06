import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Signup from '../components/Signup'
import Login from '../components/Login'
import Profile from '../components/Profile'
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useCookies} from 'react-cookie';
import {getCurrentUser} from '../actions/userActions'
function AllRoutes() {
    const current_user = useSelector(state => state.user)
    const [cookies, setCookie] = useCookies(['user']);
    const dispatch = useDispatch()
    useEffect(()=>{
        if(current_user && cookies.user == "undefined"){
            setCookie('user', current_user.id,  {path: '/'})
        } else if(cookies.user != "undefined") {
            dispatch(getCurrentUser(cookies.user))
        }
    }, [current_user] )
    return(
        <>
            <Router>
                <Switch>
                    <Route exact path='/' >
                            {current_user ? <Redirect to={"/" + current_user.username} /> : <Login  />}
                    </Route>
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/:username' >
                        {current_user ?  <Profile /> : <Login /> }
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default AllRoutes