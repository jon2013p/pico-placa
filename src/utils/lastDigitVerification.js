import hoursVerification from "./hoursVerification";
import {notification} from "antd";

const platesRestrictionsPerDay = {
    1: [1,2],
    2: [3,4],
    3: [5,6],
    4: [7,8],
    5: [9,0]
}

export default function lastDigitVerification (currentDay, lastDigit, currentTime) {
    //License Plate Number verification with last digit and schedule
    const activeLicensePlates = platesRestrictionsPerDay[Object.keys(platesRestrictionsPerDay)[Object.keys(platesRestrictionsPerDay).indexOf(currentDay.toString())]];

    if(activeLicensePlates && (activeLicensePlates[0] === lastDigit || activeLicensePlates[1] === lastDigit))
    {
        if(hoursVerification(currentTime)){
            notification['error']({
                message: 'Detente!',
                description: 'El vehículo no puede circular este día, a esta hora'
            })
        } else {
            notification['warning']({
                message: 'Ten cuidado!',
                description: 'Hoy tienes pico y placa, pero puedes circular en los horarios establecidos'
            })
        }

    } else {
        notification['success']({
            message: 'Hoy no tienes pico y placa!',
            description: 'El vehículo puede circular con normalidad'
        })
    }
}