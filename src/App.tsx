import { useState } from "react";
import { createRoot } from "react-dom/client";
import CredentialsPanel from "./components/CredentialsPanel";
import ProfilePanel from "./components/ProfilePanel";

function App() {
    const [session, setSession] = useState(false) // ph

    return (
        <>
            { session ?
                <ProfilePanel setSession={setSession}/>
                :
                <CredentialsPanel setSession={setSession}/>
            }
        </>
    );
}

const root = createRoot(document.body);
root.render(<App />);
