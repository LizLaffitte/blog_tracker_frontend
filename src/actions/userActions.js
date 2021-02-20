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


//async 
export const signup = credentials => {
    return dispatch => {
        return fetch(baseUrl + '/signup',{
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
                console.log(userData)
                dispatch(setCurrentUser(userData.data.attributes))
            }
        })
        .catch(console.log())
    }
}