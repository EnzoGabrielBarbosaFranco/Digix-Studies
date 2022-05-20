import React from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Lista from "../components/Formulario/Lista";
import "./style.scss";


function App() {
    return (
        <div className="AppStyle">
        <Botao/>    
        <Formulario/> 
        <Lista/>
        </div>
    );
}

export default App;