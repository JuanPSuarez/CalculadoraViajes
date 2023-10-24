import FieldsInput from "./components/fieldInputs"

function calculatePay(tripName, date, commissionPercentage, tripAmount, tollsCount, tollAmount, notes) {
    console.log("Calculating with values:", tripName, date, commissionPercentage, tripAmount, tollsCount, tollAmount, notes);

    const commission = parseFloat(commissionPercentage) / 100;
    
    const commissionAmount = tripAmount * commission;

    const totalPay = tripAmount - commissionAmount + (tollsCount * tollAmount);

    console.log("Result: commissionAmount =", commissionAmount, "totalPay =", totalPay);


    return {
        commissionAmount,
        totalPay,
    };
}

export default calculatePay;