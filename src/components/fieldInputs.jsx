function FieldsInput({type, placeholder, subText, active, valor}) {
    return (
        <>
        <p>{subText}</p>
        <input type={type} value={valor} placeholder={placeholder} disabled={active}/>
        </>
    );
}
FieldsInput.defaultProps = {
    type: "text",
    placeholder: "Placeholder",
    subtext: "Texto",
    optional: "enabled",
    valor: ""
}

export default FieldsInput;