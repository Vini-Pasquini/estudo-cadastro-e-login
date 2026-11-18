export default function BackButton({buttonText, onClick}:{buttonText:string, onClick:any}) {
    return (
        <>
            <button onClick={onClick}>{buttonText}</button>
        </>
    );
}
