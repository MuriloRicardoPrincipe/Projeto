import { MdOutlineWatchLater } from "react-icons/md";
import gato from '../../../../assets/Imagens/noticia/gato.png';
import Style from './EventoPrincipal.module.scss'
import EventosSecundarios from "./EventosSecundarios";

export default function EventoPrincipal() {
    return (
        <div className={Style.Conteiner}>
            <div className={Style.ConteinerConteudoPrincipal}>
                <div className={Style.ConteinerFotoPrincipal}>
                    <img className={Style.FotoPrincipal} src={gato} alt="" />
                </div>
                <div className={Style.ConteinerTagTituloData}>
                    <a className={Style.ConteudoTagEvento} href="">SOBRE O EVENTO</a>
                    <h2><a href="" className={Style.ConteudoTituloEvento}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></h2>
                    <a className={Style.ConteudoDataEvento} href=""><span><span className={Style.Relogio}><MdOutlineWatchLater /></span> 09 de junho de 2022</span></a>
                </div>
            </div>
            <EventosSecundarios/>
        </div>
    )
}