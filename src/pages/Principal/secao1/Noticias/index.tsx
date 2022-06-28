import Achados from "./Achados";
import Style from "./Noticia.module.scss";
import NoticiasDoDia from "./Noticias-do-dia";

export default function Noticias(){
    return(
        <div>
            <div>
                <NoticiasDoDia/>
            </div>
            <div>
                <Achados/>
            </div>
        </div>

    )
}