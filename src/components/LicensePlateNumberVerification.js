import React, {useState} from "react";
import {Input} from "antd";
import licensePlateVerification from "../utils/licensePlateVerification";
import lastDigitVerification from "../utils/lastDigitVerification";
const {Search} = Input;

export const LicensePlateNumberVerification = () => {
    const [loading, setLoading] = useState(false);

    const currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    const currentDay = new Date().getDay();
    const type = 'currentDay';

    const onCheck = (data) => {
        if (licensePlateVerification(data)){
            const lastDigit = parseInt(data.charAt(data.length - 1));
            const currentTime = `${currentHour}${currentMinutes}`;

            setLoading(true);
            setTimeout(() => {
                lastDigitVerification(currentDay, lastDigit, currentTime, type);
                setLoading(false)
            }, 300);

        } else {
            console.log("El número de placa ingresado no es correcto")
        }
    };

    return <Search
        placeholder={"# Placa"}
        allowClear
        loading={loading}
        onSearch={onCheck}
        testId="current-day-input"
        style={{width: 200}}
        enterButton={"Comprobar"}
    />;
};