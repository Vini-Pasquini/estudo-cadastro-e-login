import React from "react";

export default function LoginButton({onClick}:{onClick:any}) {
    return (
        <>
            <button onClick={onClick}>Entrar</button>
        </>
    );
}