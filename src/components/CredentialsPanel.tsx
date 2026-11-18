import { useState } from "react";
import LoginPanel from "./LoginPanel";
import RegisterPanel from "./RegisterPanel";

export default function CredentialsPanel({setSession}:{setSession:any}) {
    const [registerUser, setRegisterUser] = useState(false)

    return (
        <>
            { registerUser ? 
                <RegisterPanel
                    setSession={setSession}
                    setRegister={setRegisterUser}
                /> 
                :
                <LoginPanel
                    setSession={setSession}
                    setRegister={setRegisterUser}
                /> 
            }
        </>
    );
}
