import React from "react";
import Botao from "../components/Botao";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Lista";
import Lista from "../components/Lista";
import style from "./app.module.scss";


function App() {
    return (
        <div className= {style.AppStyle}>
        <Formulario/> 
        <Cronometro/>
        <Lista/>
        </div>
    );
}

export default App;