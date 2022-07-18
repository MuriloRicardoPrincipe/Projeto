/* eslint-disable react/jsx-no-comment-textnodes */
import Style from './Videos.module.scss';

export default function Videos() {
    return (
        <div className={Style.ConteinerN1}>
            <div className={Style.ConteinerN2}>
                <iframe className={Style.VideoPrincipal}
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/09R1rIhk7dk"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                /**Aqui vai o codigo do video ao vivo lembrando que
                se não for transmitir na hora deve ser substituido por
                outro video de sua preferencia ele e envolvido pelas tag iframe **/
                ></iframe>
            </div>

            <div>
                <div className={Style.ConteinerN3}>
                    <iframe
                        width="200"
                        height="150"
                        src="https://www.youtube.com/embed/09R1rIhk7dk"
                        title="Aqui vai o Titulo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    /**Aqui vai o codigo do video ao vivo lembrando que
                    se não for transmitir na hora deve ser substituido por
                    outro video de sua preferencia ele e envolvido pelas tag iframe **/
                    ></iframe>
                    <p className={Style.TituloVideo}>Titulo do videoTitulo do videoTitulo do video</p>
                </div>
                <div className={Style.ConteinerN3}>
                    <iframe 
                        width="200"
                        height="150"
                        src="https://www.youtube.com/embed/09R1rIhk7dk"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    /**Aqui vai o codigo do video ao vivo lembrando que
                    se não for transmitir na hora deve ser substituido por
                    outro video de sua preferencia ele e envolvido pelas tag iframe **/
                    ></iframe>
                    <p className={Style.TituloVideo}>Titulo do video</p>
                </div>
                <div className={Style.ConteinerN3}>
                    <iframe
                        width="200"
                        height="150"
                        src="https://www.youtube.com/embed/09R1rIhk7dk"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    /**Aqui vai o codigo do video ao vivo lembrando que
                    se não for transmitir na hora deve ser substituido por
                    outro video de sua preferencia ele e envolvido pelas tag iframe **/
                    ></iframe>
                    <p className={Style.TituloVideo}>Titulo do video</p>
                </div>
            </div>
        </div>
    )
}