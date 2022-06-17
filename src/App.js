import logo from './logo.svg';
import './App.css';
import {LicensePlateNumberVerification} from "./components/LicensePlateNumberVerification";
import {Row} from "antd";

function App() {
  return (
    <div className="App">
      <Row justify={'center'}>
        <p>Verifica si el vehículo puede circular en este momento</p>
      </Row>
      <Row>
        <LicensePlateNumberVerification />
      </Row>
    </div>
  );
}

export default App;
