import Style from './Classificados.module.scss';
import produtos from '../../../data/produto.json';

export default function ClassificadosGeral(){

    let classificadosAleatorio = [produtos];
    classificadosAleatorio = classificadosAleatorio.sort(() => 0.5 - Math.random()).splice(0,4);

    return (
        <div>

        </div>
    )

}