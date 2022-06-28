import Style from "./Achados.module.scss";
import Card from 'react-bootstrap/Card';
import foto from "../../../../../assets/Imagens/noticia/gato.png";
import FormularioCritica from "./FormularioCritica";

export default function Achados() {
    return (
        <div className={Style.Conteinern1}>
            <div className={Style.Conteinern2}>
                <div className={Style.Conteinern3}>
                    <Card className={Style.Carta}>
                        <Card.Img className={Style.Foto} src={foto} />
                        <Card.Body>
                            <Card.Title className={Style.Titulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className={Style.Carta}>
                        <Card.Img className={Style.Foto} src={foto} />
                        <Card.Body>
                            <Card.Title className={Style.Titulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className={Style.Carta}>
                        <Card.Img className={Style.Foto} src={foto} />
                        <Card.Body>
                            <Card.Title className={Style.Titulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className={Style.CartaFormulario}>
                        <FormularioCritica />
                    </Card>
                    <div className={Style.Publicidade}>
                        publicidade
                    </div>
                </div>
            </div>
            <div className={Style.AchadosEPerdidos}>
                <h2><span>/</span>Achados e Perdidos</h2>
                <div></div>
            </div>
        </div>
    )
}