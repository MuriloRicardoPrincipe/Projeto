import { BiChevronRightCircle } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import Style from './MaisLidas.module.scss';
import gato from '../../../../assets/Imagens/noticia/gato.png';

export default function MaisLidas() {
    return (
        <div>
            <div className={Style.ConteinerSecao}>
                <h2 className={Style.Titulo}><span className={Style.TituloBarra}>/</span> Mais Lidas</h2>
                <div className={Style.Barra}></div>
                <a className={Style.Link} href="">Todos os itens</a><span className={Style.Icone}><BiChevronRightCircle /></span>
            </div>
            <div className={Style.ConteinerNoticia}>
                <div className={Style.ConteudoNoticia}>
                    <span  className={Style.tag} >tag</span>
                    <h2 className={Style.Conteudotitulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <span><span className={Style.Relogio}><MdOutlineWatchLater/></span> 09 de junho de 2022</span>
                </div>
                <img className={Style.foto} src={gato} alt="" />
            </div>
            <div className={Style.ConteinerNoticia}>
                <div className={Style.ConteudoNoticia}>
                    <span  className={Style.tag} >tag</span>
                    <h2 className={Style.Conteudotitulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <span><span className={Style.Relogio}><MdOutlineWatchLater/></span> 09 de junho de 2022</span>
                </div>
                <img className={Style.foto} src={gato} alt="" />
            </div>
            <div className={Style.ConteinerNoticia}>
                <div className={Style.ConteudoNoticia}>
                    <span  className={Style.tag} >tag</span>
                    <h2 className={Style.Conteudotitulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <span><span className={Style.Relogio}><MdOutlineWatchLater/></span> 09 de junho de 2022</span>
                </div>
                <img className={Style.foto} src={gato} alt="" />
            </div>
            <div className={Style.ConteinerNoticia}>
                <div className={Style.ConteudoNoticia}>
                    <span  className={Style.tag} >tag</span>
                    <h2 className={Style.Conteudotitulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <span><span className={Style.Relogio}><MdOutlineWatchLater/></span> 09 de junho de 2022</span>
                </div>
                <img className={Style.foto} src={gato} alt="" />
            </div>
            <div className={Style.ConteinerNoticia}>
                <div className={Style.ConteudoNoticia}>
                    <span  className={Style.tag} >tag</span>
                    <h2 className={Style.Conteudotitulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <span><span className={Style.Relogio}><MdOutlineWatchLater/></span> 09 de junho de 2022</span>
                </div>
                <img className={Style.foto} src={gato} alt="" />
            </div>
        </div>
    )
}