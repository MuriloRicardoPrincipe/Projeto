import Style from './FormularoElogia.module.scss';
import { Form } from "react-bootstrap";
import trambone from '../../../../../assets/Imagens/iconespng/trambone.png';

export default function FormularoElogia() {
    return (
        <div className={Style.Conteiner}>
            <div className={Style.ConteinerN2}>
                <h2 className={Style.Titulo}><img src={trambone} alt="" />META A BOCA NO TRAMBONE <span className={Style.Barra}>/</span></h2>
                <p className={Style.Frase}>Reclame AQUI ou elogie Aqui</p>
                <p className={Style.Frase}>Envie sua sugestão de pauta</p>
            </div>
            <Form>
                <Form.Group className={Style.ConteinerForm} controlId="formGroupEmail">
                    <Form.Control className={Style.Input} type="name" placeholder="Digite seu nome completo" />
                </Form.Group>
                <Form.Group className={Style.ConteinerForm} controlId="formGroupEmail">
                    <Form.Control className={Style.Input} type="Telefone" placeholder="Digite seu nome completo" />
                </Form.Group>
                <Form.Group className={Style.ConteinerForm} controlId="formGroupEmail">
                    <Form.Control className={Style.Input} type="Cidade" placeholder="Digite seu nome completo" />
                </Form.Group>
                <Form.Group className={Style.ConteinerForm} controlId="formGroupEmail">
                    <Form.Control className={Style.Input} type="Assunto" placeholder="Digite seu nome completo" />
                </Form.Group>
                <Form.Group className={Style.ConteinerForm} controlId="exampleForm.ControlTextarea1">
                    <Form.Control className={Style.Input} as="textarea" placeholder="Escreva com detalhes o que voçê perdeu ou encontrou" />
                </Form.Group>
                <Form.Group className={Style.ConteinerForm}>
                    <Form.Control className={Style.Input} type="file" size="sm" />
                </Form.Group>
                <button className={Style.BotaoEnviar}>Enviar</button>
            </Form>
        </div>
    )
}