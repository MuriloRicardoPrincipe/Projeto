import { Form } from "react-bootstrap";
import { AiOutlineFileText } from 'react-icons/ai';
import { MdOutlineWatchLater } from 'react-icons/md';
import Style from './FormularioAchados.module.scss';
import gato from '../../../../../assets/Imagens/noticia/gato.png'

export default function FormularioAchados() {
    return (
        <div className={Style.Conteiner}>
            <div className={Style.ArrumandoTamanho}>
                <h2 className={Style.TituloAchados}>Gatinha foi achado perto de casa de pesca comendo peixe</h2>
                <p><MdOutlineWatchLater /> data exmplo 9 de junho de 2029</p>
                <div className={Style.BarraMenor}></div>
                <p>perdeu e quer encontrar? Encontrou e quer devolver</p>
                <Form>
                    <Form.Group className={Style.ConteinerForm} controlId="formGroupEmail">
                        <Form.Control className={Style.TamanhoForm} type="name" placeholder="Digite seu nome completo" />
                    </Form.Group>
                    <Form.Group className={Style.ConteinerForm} controlId="exampleForm.ControlTextarea1">
                        <Form.Control className={Style.TamanhoForm} as="textarea" placeholder="Escreva com detalhes o que voçê perdeu ou encontrou" />
                    </Form.Group>
                    <Form.Group className={Style.ConteinerForm}>
                        <Form.Control className={Style.TamanhoFormFile} type="file" size="sm" />
                    </Form.Group>
                </Form>
            </div>
            <div>
                <button className={Style.Botao} >
                    Clique aqui para enviar <AiOutlineFileText />
                </button>
            </div>
            <div>
                <img className={Style.foto} src={gato} alt="" />
            </div>
        </div>

    )
}