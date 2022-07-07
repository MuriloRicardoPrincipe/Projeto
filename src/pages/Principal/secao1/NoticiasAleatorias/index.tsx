import gato from '../../../../assets/Imagens/noticia/gato.png'
import Style from './NoticiasAleatorias.module.scss'

export default function NoticiasAleatorias(){   
    return(
        <div className={Style.Conteiner}>
            <div className={Style.TamanhoConteudo} >
                <a href=""><span className={Style.TagsConteudo}>Entreterimento</span></a>
                <img className={Style.fotoConteudo} src={gato} alt="" />
                <a className={Style.LinkConteudo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
            </div>
            <div  className={Style.TamanhoConteudo}>
                <a href=""><span className={Style.TagsConteudo}>Entreterimento</span></a>
                <img className={Style.fotoConteudo} src={gato} alt="" />
                <a className={Style.LinkConteudo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
            </div>
            <div  className={Style.TamanhoConteudo}>
                <a href=""><span className={Style.TagsConteudo}>Entreterimento</span></a>
                <img className={Style.fotoConteudo} src={gato} alt="" />
                <a className={Style.LinkConteudo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
            </div>

            <div>
                <img className={Style.Banner} src={gato} alt="" />
            </div>
        </div>
    )
}