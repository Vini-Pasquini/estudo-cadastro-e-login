import React, { useState } from "react";
import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";
import BackButton from "./BackButton";
import ConfirmButton from "./ConfirmButton";

export default function LoginPanel({setSession, setRegister}:{setSession:any, setRegister:any}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function onLoginButtonClick() {
        // verificar se usuario existe no db
        // validar a senha do usuario
            // se login falhar, dizer "usuario ou senha incorreto"
        // logar
        setSession(true)
    }

    return (
        <div className="login-panel">
            <UsernameInput
                username={username}
                setUsername={setUsername}
            />
            <PasswordInput
                fieldName="Senha"
                password={password}
                setPassword={setPassword}
            />
            <div className="button-row">
                <BackButton
                    buttonText="Criar conta..."
                    onClick={() => setRegister(true)}
                />
                <ConfirmButton
                    buttonText="Entrar"
                    onClick={onLoginButtonClick}
                />
            </div>
        </div>
    );
}
