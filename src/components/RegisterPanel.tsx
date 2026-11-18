import { useState } from "react";
import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";
import BackButton from "./BackButton";
import ConfirmButton from "./ConfirmButton";
import FormError from "./FormErrorLine";

export default function RegisterPanel({setSession, setRegister}:{setSession:any, setRegister:any}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMessage, setError] = useState("")

    function onRegisterButtonClick() {
        // verificar se campos estao preenchidos
        if (username == "") { setError("campo Usuario nao preenchido"); return; }
        if (password == "") { setError("campo Senha nao preenchido"); return; }
        // verificar se as senhas batem
        if (confirmPassword != password) { setError("Senhas nao correspondem"); return; }
        // verificar disponibilidade de nome de usuario
        if (true) { setError("Usuario ja cadastrado"); return; }
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
                password={confirmPassword}
                setPassword={setConfirmPassword}
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
            {errorMessage != "" && <FormError message={errorMessage}/>}
        </div>
    );
}
