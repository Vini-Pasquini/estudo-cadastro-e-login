import { useState } from "react";

export default function ProfilePanel({setSession}:{setSession:any}) {

    return (
        <>
            <h2>Placeholder Profile</h2>
            <button onClick={() => setSession(false)}>SAIR</button>
        </>
    );
}
