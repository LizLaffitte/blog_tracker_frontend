const baseUrl = 'http://127.0.0.1:8000'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

// export const authRequest = () => {
//     return {
//       type: types.AUTHENTICATION_REQUEST
//     }
// }

// export const authSuccess = (user, token) => {
//     return {
//       type: types.AUTHENTICATION_SUCCESS,
//       user: user,
//       token: token
//     }
// }

// export const authFailure = (errors) => {
//     return {
//       type: types.AUTHENTICATION_FAILURE,
//       errors: errors
//     }
// }

//async 
export const signup = credentials => {
    return dispatch => {
        return fetch(baseUrl + '/users',{
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(userData => {
            if(userData.errors){
                console.log(userData.errors)
            } else {
                dispatch(setCurrentUser(userData.data.attributes))
            }
        })
        .catch(console.log())
    }
}

export const login = (credentials, token) => {
    return dispatch => {
        return fetch(baseUrl + '/login',{
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(userData => {
            if(userData.error){
                console.log(userData.error)
            } else {
                console.log(userData)
                return userData
            }
        })
        .catch(console.log())
    }
}

export const auth = credentials => {
    let creds = {}
    creds["auth"] = credentials
    return dispatch => {
        return fetch(baseUrl + '/api/v1/auth',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({auth: credentials})
        })
        .then(response => response.json())
        .then(userData => {
            if(userData.error){
                console.log(userData.error)
            } else {
                console.log(userData)
                let user_token = userData.jwt
                login(credentials, user_token)
                // dispatch(setCurrentUser(userData.data.attributes))
            }
        })
        .catch(errors => {
            console.log(errors)
        })
    }
}


export const logout = () => {
    return dispatch => {
        return fetch(baseUrl + '/logout',{
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(userData => {
            if(userData.errors){
                console.log(userData.errors)
            } else {
                dispatch(clearCurrentUser)
            }
        })
        .catch(console.log())
    }
}