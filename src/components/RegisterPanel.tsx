import React, { useState } from "react";
import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";
import BackButton from "./BackButton";
import ConfirmButton from "./ConfirmButton";

export default function RegisterPanel({setSession, setRegister}:{setSession:any, setRegister:any}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    function onRegisterButtonClick() {
        // verificar se as senhas batem
        // verificar se usuario ja existe no db
        // registrar novo usuario e senha no db e logar
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
            <PasswordInput
                fieldName="Confirmar Senha"
                password={passwordConfirm}
                setPassword={setPasswordConfirm}
            />
            <div className="button-row">
                <BackButton
                    buttonText="Entrar..."
                    onClick={() => setRegister(false)}
                />
                <ConfirmButton
                    buttonText="Cadastrar"
                    onClick={onRegisterButtonClick}
                />
            </div>
        </div>
    );
}
