import React from "react";
import LoginPanel from "./components/LoginPanel";
import { createRoot } from "react-dom/client";

function App() {
    return (
        <>
            <LoginPanel />
        </>
    );
}

const root = createRoot(document.body);
root.render(<App />);