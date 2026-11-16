import React, { useState } from "react";
import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";
import LoginButton from "./LoginButton";

export default function LoginPanel() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function onLoginButtonClick() {
        alert("Logado como: " + username)
    }

    return (
        <div className="login-panel">
            <UsernameInput
                username={username}
                setUsername={setUsername}
            />
            <PasswordInput
                password={password}
                setPassword={setPassword}
            />
            <LoginButton onClick={onLoginButtonClick}/>
        </div>
    );
}