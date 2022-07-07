import Style from './BotaoAnuncios.module.scss';
import { useNavigate } from 'react-router-dom';

export default function BotaoAnuncios(){
    const navigate = useNavigate();
    function redirecionarPara(){
        navigate('/classificados', { replace:false})
    }

    return(
        <div>
            <button
             className={Style.Botao}
             onClick={() => redirecionarPara()}
             >Todos Classificados</button>
        </div>
    )
}