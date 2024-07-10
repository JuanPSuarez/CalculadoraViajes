/* eslint-disable react/prop-types */
function FieldsInput({type, placeholder, subText, active, valor, onChange}) {
    return (
        <>
        <p>{subText}</p>
        <input 
        type={type}
        value={valor} 
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

FieldsInput.prototypes

export default FieldsInput;