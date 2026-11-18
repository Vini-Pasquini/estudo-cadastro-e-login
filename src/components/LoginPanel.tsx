import { useState } from "react";
import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";
import BackButton from "./BackButton";
import ConfirmButton from "./ConfirmButton";
import FormError from "./FormErrorLine";

export default function LoginPanel({setSession, setRegister}:{setSession:any, setRegister:any}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setError] = useState("")

    function onLoginButtonClick() {
        // verificar se campos estao preenchidos
        if (username == "") { setError("campo Usuario nao preenchido"); return; }
        if (password == "") { setError("campo Senha nao preenchido"); return; }
        // verificar se usuario existe no db E validar a senha do usuario
        if (true) { setError("Usuario ou Senha incorretos"); return; }
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
            {errorMessage != "" && <FormError message={errorMessage}/>}
        </div>
    );
}
