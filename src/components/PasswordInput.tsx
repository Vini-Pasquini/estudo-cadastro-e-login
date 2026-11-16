import React, { useState } from "react";

export default function PasswordInput({password, setPassword}:{password:string, setPassword:any}) {
    const [isViewingPassword, setViewingPassword] = useState(false)
    
    return (
        <>
            <span>Senha: </span>
            <div>
                <input
                    type={isViewingPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="checkbox"
                    onChange={(e) => setViewingPassword(e.target.checked)}
                />
            </div>
            
        </>
    );
}