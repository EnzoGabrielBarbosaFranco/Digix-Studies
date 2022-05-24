import React, { useState } from "react";
import Botao from "../components/Botao";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import style from "./app.module.scss";
import { ITarefa } from '../types/ITarefa'


function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    return (
        <div className={style.AppStyle}>
            <Formulario setTarefas={setTarefas} />
            <Cronometro />
            <Lista tarefas={tarefas} />
        </div>
    );
}

export default App;