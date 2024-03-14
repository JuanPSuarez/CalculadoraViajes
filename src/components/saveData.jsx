import { useState } from 'react';
import { push, getDatabase } from 'firebase/database';
import { app } from "./firebase.config";

const AddTripForm = () => {
  const [viajeData, setViajeData] = useState({
    fechaViaje: "1234",
    nombreViaje: "aaaa",
    totalViaje: "1",
    vajeId: "ifsen2",
  });

  const handleAddTrip = async () => {
    try {
      // Ensure Firebase app is initialized
      const reference = await push(database, 'viajes');
      await push(reference, viajeData);

      console.log('Data pushed successfully!', reference.key);
      // Clear form fields or display a success message here
    } catch (error) {
      console.error('Error pushing data:', error);
      // Display an error message to the user
    }
  };

  return (
    <div>
      {/* Your form elements (if applicable) */}
      <button onClick={handleAddTrip}>Add Trip</button>
    </div>
  );
};

export default AddTripForm;
