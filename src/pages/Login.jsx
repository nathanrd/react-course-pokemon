import React, {Fragment, Component, useState} from 'react';
import TextField from '@material-ui/core/TextField';


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChangePassword = ({currentTarget}) => {
        console.log("typing", currentTarget.value);
        setPassword(currentTarget.value);
    }
    const handleChangeUsername = ({currentTarget}) => {
        setUsername(currentTarget.value)
    }
        return (
            <div className="input-login">
                <TextField label="Username" onChange={handleChangeUsername}/>
                <TextField label="Password" type="password" onChange={handleChangePassword}/>
                <p>{username && 'Username is: '} {username}</p>
                <p>{password && 'Password is: '} {password}</p>
             </div>
        );
    }