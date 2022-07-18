import gato from '../../../assets/Imagens/noticia/gato.png'
import podcast from '../../../assets/Imagens/propaganda/podcast.png'
import propaganda from '../../../assets/Imagens/propaganda/casadoveneno.png'
import Style from './Regional.module.scss'
import { BiChevronRightCircle } from 'react-icons/bi';

export default function Regional() {
    return (

        <div>
            <div className={Style.Conteiner}>
                <h2 className={Style.Titulo}><span className={Style.ContraBarra}>/</span>Regional</h2>
                <div className={Style.Barra}>
                </div>
                <a className={Style.LinkParaTodaAsReceitas} href="">todas receitas <BiChevronRightCircle /></a>
            </div>
            <div className={Style.Conteiner}>
                <div className={Style.TamanhoConteudo} >
                    <a href=""><span className={Style.TagsConteudo}>Entreterimento</span></a>
                    <img className={Style.fotoConteudo} src={gato} alt="" />
                    <a className={Style.LinkConteudo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                </div>
                <div className={Style.TamanhoConteudo}>
                    <a href=""><span className={Style.TagsConteudo}>Entreterimento</span></a>
                    <img className={Style.fotoConteudo} src={gato} alt="" />
                    <a className={Style.LinkConteudo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                </div>
                <div className={Style.TamanhoConteudo}>
                    <a href=""><span className={Style.TagsConteudo}>Entreterimento</span></a>
                    <img className={Style.fotoConteudo} src={gato} alt="" />
                    <a className={Style.LinkConteudo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                </div>

                <div>
                    <img className={Style.Banner} src={gato} alt="" />
                </div>
            </div>

            <div className={Style.ConteinerPropaganda}>
                <a href=""><img className={Style.podecast} src={podcast} alt="" /></a>
                <a href=""><img className={Style.propaganda} src={propaganda} alt="" /></a>
            </div>

        </div>
    )
}