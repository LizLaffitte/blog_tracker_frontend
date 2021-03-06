import React, { useState } from "react";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';

function Profile(){
    const user = useSelector(state => state.user)
    if(!user){
        console.log(user.username)
    }
    return(
        <>
        <h1>{user.username}'s Profile</h1>
        <table>
            <tr>
                <td>Username:</td>
                <td>{user.username}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>{user.email}</td>
            </tr>
            <tr>
                <td>AirTable API Key:</td>
                <td>{user.at_key || <Link to="">Add AirTable API Key</Link>}</td>
            </tr>
        </table>
        </>
    )
}
export default Profile