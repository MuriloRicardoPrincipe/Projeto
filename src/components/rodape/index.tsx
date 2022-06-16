import Style from './rodape.module.scss'
import RodapeInferior from './rodapeInferior';
import RodapeSuperior from './rodapeSuperior';

export default function Rodape(){
    return(
        <footer>
            <RodapeSuperior/>
            <div className={Style.Linha}>
            </div>
            <RodapeInferior/>
        </footer>
    );
}