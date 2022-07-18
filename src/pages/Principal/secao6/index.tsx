import Style from './Esportes.module.scss'
import { BiChevronRightCircle } from 'react-icons/bi';
import { MdOutlineWatchLater } from 'react-icons/md';
import gato from '../../../assets/Imagens/noticia/gato.png';

export default function Esporte() {
    return (
        <div>
            <div className={Style.Conteiner}>
                <h2 className={Style.Titulo}><span className={Style.ContraBarra}>/</span>Esporte</h2>
                <div className={Style.Barra}>
                </div>
                <a className={Style.LinkEsporte} href="">todas as notícias <BiChevronRightCircle /></a>
            </div>
            <div className={Style.EspoteEmDestaque}>
                <div className={Style.ConteinerEspoteEmDestaqueConteudo}>
                    <div className={Style.EspoteEmDestaqueConteudo}>
                        <h2><a className={Style.EsporteTitulo} href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h2>
                        <p><a href="" className={Style.ConteudoEsporte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta, ipsum eget...</a></p>
                        <p><a href="" className={Style.ConteudoEsporte}><span className={Style.Relogio}><MdOutlineWatchLater/></span> 09 de junho de 2022</a></p>
                    </div>

                    <div className={Style.EspoteEmDestaqueConteudo}><img className={Style.EsporteFotoPrincipal} src={gato} alt="" /></div>
                </div>
                <div className={Style.ConteinerPropaganda}>
                    <img className={Style.Propaganda} src={gato} alt="" />
                </div>
            </div>
            <div className={Style.ConteinerVariadosEsporte}>
                <div className={Style.ConteinerNoticiasEsporte}>
                    <img className={Style.FotoDaNoticia} src={gato} alt="" />
                    <a href=""><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></a>
                </div>
                <div className={Style.ConteinerNoticiasEsporte}>
                    <img className={Style.FotoDaNoticia} src={gato} alt="" />
                    <a href=""><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></a>
                </div>
                <div className={Style.ConteinerNoticiasEsporte}>
                    <img className={Style.FotoDaNoticia} src={gato} alt="" />
                    <a href=""><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></a>
                </div>
                <div  className={Style.ConteinerPropaganda}>
                    <img className={Style.Propaganda} src={gato} alt="" />
                </div>
            </div>
        </div>
    )
}