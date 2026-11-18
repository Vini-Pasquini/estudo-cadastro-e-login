import React, { useState } from "react";
import LoginPanel from "./components/LoginPanel";
import RegisterPanel from "./components/RegisterPanel";
import { createRoot } from "react-dom/client";

function App() {
    const [registerUser, setRegisterUser] = useState(false)
    const [session, setSession] = useState(false) // ph

    let buttonText = registerUser ? "Entrar com conta..." : "Criar nova conta..."

    return (
        <div style={session ? {backgroundColor: "#a0ffa0"} : {}}>
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
        </div>
    );
}

const root = createRoot(document.body);
root.render(<App />);
