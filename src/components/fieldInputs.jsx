function FieldsInput({type, placeholder, subText, active, valor}) {
    return (
        <>
        <p>{subText}</p>
        <input type={type} defaultValue={valor} placeholder={placeholder} disabled={active}/>
        </>
    );
}
FieldsInput.defaultProps = {
    type: "text",
    placeholder: "Placeholder",
    subtext: "Texto",
    disabled: "",
    valor: ""
}

export default FieldsInput;