import Style from "./NoticiasDoDia.module.scss";
import foto from "../../../../../assets/Imagens/noticia/gato.png";

export default function NoticiasDoDia() {
    return (
        <div className={Style.Conteiner}>
            <div className={Style.ConteinerBack}>
                <div className={Style.ConteinerNoticia}>
                    <div className={Style.ConteinerNoticiaDoDia} >
                        <span className={Style.tag}>tag</span>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <span>data</span> <span>views</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Maecenas ac augue non neque elementum accumsan. Maecenas neque velit,
                            accumsan a laoreet sit amet, venenatis et quam. Vestibulum pretium tincidunt justo,
                            id vulputate diam tincidunt ac. Ut efficitur vehicula sem, nec sodales massa elementum vitae.
                            Proin bibendum nulla in tincidunt vulputate. Nullam nec justo nisl.
                            Ut ac mi fringilla, scelerisque felis eu, cursus dui. Vivamus dictum eu ligula at viverra.</p>
                    </div>
                    <div>
                        <div className={Style.ConteinerNoticiasGeral}>
                            <div className={Style.ConteinerDoDia}>
                                <img className={Style.NoticiasFoto} src={foto} alt="" />
                            </div>
                            <div>
                                <span className={Style.NoticiaTag}>tag</span>
                                <h2 className={Style.NoticiaTitulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                                <span>data</span>
                            </div>

                        </div>
                        <div className={Style.ConteinerNoticiasGeral}>
                            <div className={Style.ConteinerDoDia}>
                                <img className={Style.NoticiasFoto} src={foto} alt="" />
                            </div>
                            <div >
                                <span className={Style.NoticiaTag}>tag</span>
                                <h2 className={Style.NoticiaTitulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                                <span>data</span>
                            </div>
                        </div>
                        <div className={Style.ConteinerNoticiasGeral}>
                            <div className={Style.ConteinerDoDia}>
                                <img className={Style.NoticiasFoto} src={foto} alt="" />
                            </div>
                            <div>
                                <span className={Style.NoticiaTag}>tag</span>
                                <h2 className={Style.NoticiaTitulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                                <span>data</span>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
}