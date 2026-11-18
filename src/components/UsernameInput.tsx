export default function UsernameInput({username, setUsername}:{username:string, setUsername:any}) {
    return (
        <>
            <span className="input-field-name">Usuario: </span>
            <input
                type="text"
                placeholder="Nome de Usuário..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </>
    );
}
