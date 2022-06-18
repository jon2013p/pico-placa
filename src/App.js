import React from "react";
import './styles/App.css';
import {Row, Typography} from "antd";
import {LicensePlateNumberVerificationDynamic} from "./components/LicensePlateNumberVerificationDynamic";

const {Title} = Typography;

function App() {
  return (
    <div className="App">
      <Row justify={'center'}>
        <Title level={2}>Predictor de Pico y Placa</Title>
      </Row>
      <Row justify={'center'}>
          <LicensePlateNumberVerificationDynamic />
      </Row>
    </div>
  );
}

export default App;
