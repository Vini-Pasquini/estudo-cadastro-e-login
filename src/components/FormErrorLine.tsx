export default function FormError({message}:{message:string}) {
    return (
        <span style={{
                    color: "red",
                    fontSize: 12
        }}>
            {"<!> " + message}
        </span>
    );
}