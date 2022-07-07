import Style from "./Secao2.module.scss"
import Videos from "./videosSegundarios/Index"
import { BiChevronRightCircle } from 'react-icons/bi';

export default function Aovivo() {
    return (
        <div className={Style.Conteiner}>
            <div className={Style.ConteinerLiveTitulo}>
                <h2 className={Style.LiveTitulo}><span className={Style.LiveTituloBarra}>/</span>Live <span className={Style.MidiaSudoeste}>Midia Sudoeste</span></h2>
                <div className={Style.BarraVermelha}></div>
                <a href="" className={Style.TodasAsNoticias}>Todas as notícias <BiChevronRightCircle/></a>
            </div>
            <Videos/>
        </div>
    )
}