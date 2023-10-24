function FieldsInput({type, placeholder, subText, active, valor, onChange}) {
    return (
        <>
        <p>{subText}</p>
        <input 
        type={type} 
        defaultValue={valor} 
        placeholder={placeholder} 
        disabled={active}
        onChange={onChange}
        />
        </>
    );
}
FieldsInput.defaultProps = {
    type: "text",
    placeholder: "Placeholder",
    subtext: "Texto",
    active: false,
    valor: "",
    onChange: () => {}

}

export default FieldsInput;