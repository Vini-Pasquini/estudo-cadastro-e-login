export default function ConfirmButton({buttonText, onClick}:{buttonText:string, onClick:any}) {
    return (
        <>
            <button onClick={onClick}>{buttonText}</button>
        </>
    );
}
