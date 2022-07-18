import { MdOutlineWatchLater } from "react-icons/md";
import Style from './EventosVariados.module.scss';
import gato from '../../../../assets/Imagens/noticia/gato.png';

export default function EventosVariados(){
    return(
        <div className={Style.Conteiner}>
            <div className={Style.ConteinerConteudo}>
                <img className={Style.ConteudoFoto} src={gato} alt="" />
                <div>
                    <h4 className={Style.ConteudoTitulo}><a className={Style.ConteudoTitulo} href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></h4>
                    <a className={Style.ConteudoDataEvento} href=""><span><span className={Style.Relogio}><MdOutlineWatchLater /></span> 09 de junho de 2022</span></a>
                </div>
            </div>
            <div className={Style.ConteinerConteudo}>
                <img className={Style.ConteudoFoto} src={gato} alt="" />
                <div>
                    <h4 className={Style.ConteudoTitulo}><a className={Style.ConteudoTitulo} href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></h4>
                    <a className={Style.ConteudoDataEvento} href=""><span><span className={Style.Relogio}><MdOutlineWatchLater /></span> 09 de junho de 2022</span></a>
                </div>
            </div>
            <div className={Style.ConteinerConteudo}>
                <img className={Style.ConteudoFoto} src={gato} alt="" />
                <div>
                    <h4 className={Style.ConteudoTitulo}><a className={Style.ConteudoTitulo} href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></h4>
                    <a className={Style.ConteudoDataEvento} href=""><span><span className={Style.Relogio}><MdOutlineWatchLater /></span> 09 de junho de 2022</span></a>
                </div>
            </div>
        </div>
    )
}