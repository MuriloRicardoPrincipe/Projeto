import { Button, Card, Form } from "react-bootstrap";
import trambone from "../../../../../../assets/Imagens/iconespng/trambone.png";
import fileIcone from "../../../../../../assets/Imagens/iconespng/fileIcone.png"
import Style from "./FormularioCritica.module.scss";

export default function FormularioCritica() {
    return (
        <Form className={Style.FormularioCard}>
            <Form.Group  controlId="formBasicEmail">

                <div className={Style.FormGrupo}>
                    <div>
                        <img src={trambone} alt=""/>
                    </div>
                    <div>
                        <Card.Title><h2 className={Style.Titulo}> META A BOCA NO TRANBONE<span className={Style.Barra}>/</span></h2> </Card.Title>
                        <p className={Style.Texto}>Reclame AQUI ou Elogie AQUI</p>
                        <p className={Style.Texto}>Envie sua sujestão de pauta</p>
                    </div>
                </div>
                <Form.Control className={Style.FormInpute} type="Nome" placeholder="digite o seu nome" />
                <Form.Control className={Style.FormInpute} type="Telefone" placeholder="digite o seu telefone" />
                <Form.Control className={Style.FormInpute} type="Cidade" placeholder="digite a sua Cidade" />
                <Form.Control className={Style.FormInpute} type="Assunto" placeholder="digite o assunto" />
                <textarea className={Style.Mensagem} name="" id="" placeholder="digite sua Mensagem"></textarea>
            </Form.Group>
            <div className={Style.EnviarArquivos}>
                <p className={Style.EnviarFrase} >Você pode anexar um arquivo ao lado</p>
                <button className={Style.EnviarBotao}><img className={Style.fileIcone} src={fileIcone} alt="" /> enviar arquivo</button>
            </div>

            <Button className={Style.EnviarFormCompleto} variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    )
}