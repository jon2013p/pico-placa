import React, {useState} from "react";
import licensePlateVerification from "../utils/licensePlateVerification";
import lastDigitVerification from "../utils/lastDigitVerification";
import moment from 'moment';
import {Form, TimePicker, Input, Button, message} from "antd";

const Item = Form.Item;

export const LicensePlateNumberVerificationDynamic = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const onSubmit = (formData) => {

        if(licensePlateVerification(formData.licensePlateNumber)){

            const lastDigit = parseInt(formData.licensePlateNumber.charAt(formData.licensePlateNumber.length - 1));
            const day = new Date(formData.date).getDay();
            const time = formData['time'].format('HH:mm').replace(':', '');

            if( moment(formData.date, "MM/DD/YYY").isValid() ){
                setError(false);
                setLoading(true);
                setTimeout(() => {
                    lastDigitVerification(day, lastDigit, time);
                    setLoading(false);
                }, 300);
            } else {
                setError(true);
            }

        } else {
            message.error("La placa ingresada no es correcta")
        }
    };

    return (
        <Form
            name={'form'}
            layout={'horizontal'}
            onFinish={onSubmit}
        >
            <Item label='# Placa'
                  name='licensePlateNumber'
                  rules={[
                      {
                          required: true,
                          message: "Por favor, ingresa tu número de placa"
                      }
                  ]}
            >
                <Input placeholder={'# placa'} />
            </Item>
            <Item label='Fecha'
                  name='date'
                  validateStatus={error ? 'error' : ''}
                  help={error ? 'Por favor, ingresa una fecha válida' : ''}
                  rules={[{
                      required: true,
                      message: "Por favor, ingresa la fecha"
                  }]}
            >
                <Input placeholder={"mm/dd/aaaa"}/>
            </Item>

            <Item name='time'
                  label='Horario'
                  rules={[{
                      required: true,
                      message: "Por favor, ingresa el horario"
                  }]}
            >
                <TimePicker format={'HH:mm'}/>
            </Item>

            <Item name={"submit-button"}>
                <Button htmlType='submit' loading={loading}>
                    Verificar datos
                </Button>
            </Item>
        </Form>
    )
}