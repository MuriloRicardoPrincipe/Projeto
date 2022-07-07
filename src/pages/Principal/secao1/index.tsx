import Style from './NoticiasDoDia.module.scss'
import email from '../../../assets/Imagens/iconespng/email.png'
import banner from '../../../assets/Imagens/propaganda/casadoveneno.png'
import SliderNoticia from './SliderNoticia'
import NoticiasAleatorias from './NoticiasAleatorias'
import AchadosPerdidos from './AchadosPerdidos'

export default function NoticiasDoDia() {

    return (
        <div className={Style.Conteiner}>
            <div className={Style.ConteinerPublicidade}>
                <img className={Style.Publicidade} src={banner} alt="" />
            </div>
            <div className={Style.ConteinerLinha}>
                <div className={Style.ConteinerAcontecendo}>
                    <h2 className={Style.AcontecendoAgora}>ACONTECENDO AGORA</h2>
                    <span className={Style.Separador}> | </span>
                    <p className={Style.FraseDaNoticiaEmDestaque}>FRASE A SER SETADA</p>
                </div>
                <div className={Style.ConteinerBotao}>
                    <button className={Style.BotaoEmail}><img src={email} alt="" /> Quero ter um @midiamail</button>
                </div>
            </div>
            <div>
                <SliderNoticia/>
            </div>
            <div>
                <NoticiasAleatorias/>
            </div>
            <div>
                <AchadosPerdidos/>
            </div>
        </div>
    )
}