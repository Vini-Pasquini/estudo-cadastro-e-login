import React, { useState } from "react";

export default function PasswordInput({fieldName, password, setPassword}:{fieldName:string, password:string, setPassword:any}) {
    const [isViewingPassword, setViewingPassword] = useState(false)
    
    return (
        <>
            <span className="input-field-name">{fieldName}: </span>
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
