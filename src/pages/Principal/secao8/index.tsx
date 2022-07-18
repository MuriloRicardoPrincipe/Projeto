import { BiChevronRightCircle } from 'react-icons/bi'
import EventoPrincipal from './EventoPrincipal'
import Style from './Eventos.module.scss'
import EventosVariados from './EventosVariados'


export default function Eventos() {
    return (
        <div className={Style.Conteiner}>
            <div className={Style.ConteinerLiveTitulo}>
                <h2 className={Style.LiveTitulo}><span className={Style.LiveTituloBarra}>/</span>Gente</h2>
                <div className={Style.BarraVermelha}></div>
                <a href="" className={Style.TodasAsNoticias}>Todas as notícias <BiChevronRightCircle /></a>
            </div>
            <EventoPrincipal/>
            <EventosVariados/>
        </div>
    )
}