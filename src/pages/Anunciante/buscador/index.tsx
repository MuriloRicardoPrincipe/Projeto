/* eslint-disable react/react-in-jsx-scope */
import style from './buscador.module.scss';
import lupa from '../../../assets/Imagens/iconesvg/lupa.svg';

interface Props{
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador( {busca, setBusca}: Props){
    
    return <div className={style.buscador}>
        <input
            value={busca}
            onChange={evento => setBusca(evento.target.value)}
            placeholder="Buscar"
        />
        <button className={style.BotaoBuscar}>
            <img src={lupa} alt="" />
        </button>
    </div>
    
}