import Propaganda from "../../../assets/Imagens/propaganda/casadoveneno.png";
import Email from "../../../assets/Imagens/iconespng/email.png";
import Style from "./Secao.module.scss";
import Noticias from "./Noticias";

export default function Secao() {

    return (
        <div>
            <div className={Style.conteinerPropaganda}>
                <img className={Style.Banner} src={Propaganda} alt="propaganda" />
            </div>
            <div className={Style.conteiner}>
                <div className={Style.conteinerN2}>
                    <h2 className={Style.Acontecendo}>ACONTECENDO AGORA</h2>
                    <span className={Style.barraSeparadora}>|</span>
                    <p className={Style.AcontecendoDestaque}>Em Bom Jesus do Sul homem e atacado por onça parda vinda da Argentina.</p>
                </div>
                <button className={Style.botaoEmailMidia}>
                    <img src={Email} alt="botao quero ter um @midiamail" />Quero ter um @midiamail.
                </button>
            </div>
            <div className={Style.conteinerPropaganda}>
                <Noticias/>
            </div>
            <div>
                <div className={Style.ConteinerPublicidade} >
                    <div className={Style.PublicidadeRodape}>
                        publicidade
                    </div>
                </div>
            </div>
        </div>
    )
}