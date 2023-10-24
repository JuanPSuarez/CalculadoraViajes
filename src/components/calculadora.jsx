import FieldsInput from "./fieldInputs";
import { useState } from "react";
import calculatePay from "../calculator";
import './calculadora.css';
export default function Calculadora() {
    const [tripName, setTripName] = useState("");
    const [date, setDate] = useState("");
    const [commissionPercentage, setCommissionPercentage] = useState(21);
    const [tripAmount, setTripAmount] = useState(0);
    const [tollsCount, setTollsCount] = useState(0);
    const [tollAmount, setTollAmount] = useState(0);
    const [notes, setNotes] = useState("");
    const [commissionAmount, setCommissionAmount] = useState(0);
    const [totalPay, setTotalPay] = useState(0);

    
    const calculate = () => {
        const result = calculatePay(tripName, date, commissionPercentage, tripAmount, tollsCount, tollAmount, notes);
        setCommissionAmount(result.commissionAmount);
        setTotalPay(result.totalPay);
    };

    return(
        <div className="calculadora">
  <div className="form-row">
    <FieldsInput 
      type="text"
      subText="Nombre del viaje"
      placeholder="Por ej.: CBA a Los Gigantes"
      valor={tripName}
      onChange={(e) => setTripName(e.target.value)}
    />
    <FieldsInput 
      type="date"
      subText="Fecha"
      placeholder="1/1/2023"
      valor={date}
      onChange={(e) => setDate(e.target.value)}
    />
    <FieldsInput 
      type="number"
      subText="Porcentaje"
      placeholder="21%"
      valor={commissionPercentage}
      active="disabled"
      onChange={(e) => setCommissionPercentage(e.target.value)}
    />
  </div>

  <div className="form-row">
    <FieldsInput 
      type="number"
      subText="Monto del Viaje"
      placeholder="Por ej.: $10000"
      valor={tripAmount}
      onChange={(e) => setTripAmount(e.target.value)}
    />
    <FieldsInput 
      type="number"
      subText="Cantidad de Peajes"
      placeholder="Por ej.: 2"
      valor={tollsCount}
      onChange={(e) => setTollsCount(e.target.value)}
    />
    <FieldsInput 
      type="number"
      subText="Monto del Peaje"
      placeholder="Por ej.: $300 "
      valor={tollAmount}
      onChange={(e) => setTollAmount(e.target.value)}
    />
  </div>

  <FieldsInput 
    type="textarea"
    subText="Notas o comentarios"
    placeholder="En este viaje..."
    valor={notes}
    onChange={(e) => setNotes(e.target.value)}
  />

  <div className="form-row">
    <FieldsInput
      type="number"
      subText="Comisión a cobrar"
      placeholder="$0000"
      valor={commissionAmount}
      active={true}
      onChange={(e) => setCommissionAmount(e.target.value)}
    />
    <FieldsInput 
      type="number"
      subText="Total incluyendo peajes"
      placeholder="$00000"
      valor={totalPay}
      active={true}
      onChange={(e) => setTotalPay(e.target.value)}
    />
  </div>
  <button onClick={calculate}>Calcular</button>
</div>
   )
}