import hoursVerification from "./hoursVerification";

const platesRestrictionsPerDay = {
    1: [1,2],
    2: [3,4],
    3: [5,6],
    4: [7,8],
    5: [9,0]
}

export default function lastDigitVerification (currentDay, lastDigit, currentTime, type) {
    const activeLicensePlates = platesRestrictionsPerDay[Object.keys(platesRestrictionsPerDay)[Object.keys(platesRestrictionsPerDay).indexOf(currentDay.toString())]];

    console.log("Que recibo?", currentDay, lastDigit, currentTime, type)
    console.log("Datos", activeLicensePlates[0], activeLicensePlates[1])
    console.log("Tiempo", hoursVerification(currentTime));

    if((activeLicensePlates[0] === lastDigit || activeLicensePlates[1] === lastDigit) && hoursVerification(currentTime))
    {
        type = 'currentDay' ? console.log("El vehículo no puede circular hoy") : console.log("El vehículo no puede circular en este horario");
    } else {
        type = 'currentDay' ? console.log("El vehículo puede circular con normalidad") : console.log("El vehículo está autorizado a circular en este horario");
    }
}