import gato from '../../../../assets/Imagens/noticia/gato.png';
import Style from './MostrandoVoceNaMidia.module.scss'

export default function MostrandoVoceNaMidia(){
    return(
        <div>
            <h2>Olha eu aqui na Mídia</h2>
            <img className={Style.foto} src={gato} alt="" />

        </div>
    )
}