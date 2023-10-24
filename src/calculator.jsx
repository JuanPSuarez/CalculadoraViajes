function calculatePay(tripName, date, commissionPercentage, tripAmount, tollsCount, tollAmount, notes) {
    console.log("Calculating with values:", tripName, date, commissionPercentage, tripAmount, tollsCount, tollAmount, notes);

    const commission = parseFloat(commissionPercentage) / 100;
    
    const commissionAmount = tripAmount * commission;

    const tollsPayment = tollsCount * tollAmount;

    const totalPay = commissionAmount + tollsPayment;

    console.log("Result: commissionAmount =", commissionAmount, "tollsPayment =", tollsPayment, "totalPay =", totalPay);

    return {
        commissionAmount,
        tollsPayment,
        totalPay,
    };
}

export default calculatePay;
