import { ITarefa } from "../../types/ITarefa";
import Item from './Item';
import style from "./Lista.module.scss";

interface Props {
    tarefas: ITarefa[],
    selecionarTarefa (selecionarTarefa:ITarefa): void
}

function Lista({ tarefas, selecionarTarefa }: Props) {
    return (
        <aside className={style.listaTarefa}>
            <h2> Estudo do dia: </h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        selecionarTarefa={selecionarTarefa}
                    />
                ))}
            </ul>

        </aside>
    );
}
export default Lista;