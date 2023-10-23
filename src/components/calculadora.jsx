import FieldsInput from "./fieldInputs"
export default function Calculadora() {
    return(
        <>
        <FieldsInput 
        type="text"
        subText="Nombre del viaje"
        placeholder="Por ej.: CBA a Los Gigantes"/>
        <FieldsInput 
        type="date"
        subText="Fecha"
        placeholder="1/1/2023"/>
        <FieldsInput 
        type="number"
        subText="Porcentaje"
        placeholder="21%"
        valor="21"
        active="disabled"/>
        <FieldsInput 
        type="number"
        subText="Monto del Viaje"
        placeholder="Por ej.: $10000"/>
        <FieldsInput 
        type="number"
        subText="Cantidad de Peajes"
        placeholder="Por ej.: 2"/>
        <FieldsInput 
        type="number"
        subText="Monto del Peaje"
        placeholder="Por ej.: $300 "/>
        <FieldsInput 
        type="textarea"
        subText="Notas o comentarios"
        placeholder="En este viaje..."/>
        <FieldsInput 
        type="number"
        subText="Total del viaje a cobrar"
        placeholder="$00000"
        active="disabled"/>

        </>
        
        

    )
}