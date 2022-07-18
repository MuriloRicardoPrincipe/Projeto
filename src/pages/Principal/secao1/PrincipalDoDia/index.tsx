import Style from './PrincipalDoDia.module.scss';
import gato from '../../../../assets/Imagens/noticia/gato.png';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';

export default function PrincipalDoDia(){
    return(
        <div className={Style.Conteiner}>
            <div className={Style.ConteinerPrincipal}>
                <span className={Style.tag}>TAG</span>
                <h2 className={Style.PrincipalTitulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ex volutpat, malesuada ligula ut, convallis tortor</h2>
                <div className={Style.dataEViews}>
                    <span className={Style.Relogio}><MdOutlineWatchLater/>  09 de junho de 2022</span>
                    <span className={Style.view}><AiOutlineEye/>  800</span>
                </div>
                <p className={Style.PrincipalConteudo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ex volutpat, malesuada ligula ut, convallis tortor.
                     Morbi id tincidunt tortor, id imperdiet ipsum.  </p>
                
            </div>

            <div className={Style.ConteinerDiversosDoDia}>
                <div className={Style.ConteinerDoDia}>
                    <img className={Style.foto} src={gato} alt="" />
                    <div className={Style.ConteudoNoticia}>
                        <span  className={Style.tag} >tag</span>
                        <h2 className={Style.titulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <span className={Style.Relogio}><MdOutlineWatchLater/> 09 de junho de 2022</span>
                    </div>
                </div>
                <div className={Style.ConteinerDoDia}>
                    <img className={Style.foto} src={gato} alt="" />
                    <div className={Style.ConteudoNoticia}>
                        <span  className={Style.tag} >tag</span>
                        <h2 className={Style.titulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <span className={Style.Relogio}><MdOutlineWatchLater/> 09 de junho de 2022</span>
                    </div>
                </div>
                <div className={Style.ConteinerDoDia}>
                    <img className={Style.foto} src={gato} alt="" />
                    <div className={Style.ConteudoNoticia}>
                        <span  className={Style.tag}>tag</span>
                        <h2 className={Style.titulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <span className={Style.Relogio}><MdOutlineWatchLater/>  09 de junho de 2022</span>
                    </div>
                </div>
            </div>
        </div>
    )
}