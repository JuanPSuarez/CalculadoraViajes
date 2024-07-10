import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "./firebase.config"; // Assuming you have firebase.config

function ReadAllViajes() {
  const [viajes, setViajes] = useState({}); // State to store retrieved viajes data

  useEffect(() => {
    const db = getDatabase(app);
    const viajesRef = ref(db, "viajes"); // Reference to the "viajes" collection

    onValue(viajesRef, (snapshot) => {
      const data = snapshot.val();
      setViajes(data || {}); // Set empty object if no data initially
    });

    // Cleanup function to detach listener when component unmounts
    return () => onValue(viajesRef, () => {});
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      {/* Display retrieved viajes data here */}
      {Object.entries(viajes).map(([viajeId, viajeData]) => (
        <p key={viajeId}>
          {/* Access specific fields from viajeData object */}
          ID: {viajeData.idViaje} <br />
          Nombre: {viajeData.nombreViaje} <br />
          Monto: {viajeData.montoViaje} <br />
          {/* You can display other fields like fechaViaje, montoPeajeViaje, etc. */}
        </p>
      ))}
    </div>
  );
}

export default ReadAllViajes;
