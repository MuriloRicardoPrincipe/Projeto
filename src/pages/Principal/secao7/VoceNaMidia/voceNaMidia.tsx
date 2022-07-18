import { Form } from "react-bootstrap";
import Style from './VoceNaMidia.module.scss';

export default function voceNaMidia() {
    return (
        <div className={Style.Conteiner}>
            <div className={Style.ConteinerTituloDaEnquete}>
                <h2 className={Style.TituloDaEnquete}><span className={Style.BarraTitulo}>/ </span> Você na Mídia <span className={Style.BarraTitulo}> /</span></h2>
                <p className={Style.TituloDaEnqueteOque}>O que mais lhe encomoda na campanha eleitoral ?</p>
            </div>
            <Form>
                <Form.Group className={Style.ConteinerForm} controlId="formGroupEmail">
                    <Form.Control className={Style.Input} type="name" placeholder="Digite seu nome" />
                </Form.Group>
                <Form.Group className={Style.ConteinerForm} controlId="formGroupEmail">
                    
                    <Form.Group className={Style.ConteinerForm} controlId="exampleForm.ControlTextarea1">
                        <Form.Control className={Style.Input} as="textarea" placeholder="Escreva aqui o modo de preparo" />
                    </Form.Group>
                    <Form.Group className={Style.ConteinerForm} controlId="formFileSm" >
                        <Form.Control className={Style.Input} type="file" size="sm" />
                        <button className={Style.BotaoEnviar}>Enviar</button>
                    </Form.Group>
                </Form.Group>
            </Form>
        </div>
    )
}