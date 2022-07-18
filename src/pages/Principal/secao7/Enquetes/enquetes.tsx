import Form from 'react-bootstrap/esm/Form';
import Style from './Enquetes.module.scss';

export default function Enquete() {
    return (
        <div className={Style.Conteiner}>
            <div className={Style.ConteinerTituloDaEnquete}>
                <h2 className={Style.TituloDaEnquete}><span className={Style.BarraTitulo}>/ </span> ENQUETE <span className={Style.BarraTitulo}> /</span></h2>  
                <p className={Style.TituloDaEnqueteOque}>O que mais lhe encomoda na campanha eleitoral ?</p> 
            </div>
            <Form className={Style.ConteinerCheckbox}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Horário Político" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Fake News" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Pesquisa Eleitoral" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Brigas nas redes sociais" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Promessas de Candidatos" />
                </Form.Group>
            </Form>
            <div>
                <button className={Style.BotaoVotar}>Votar Agora</button>
                <button className={Style.BotaoVerR}>Ver Resultados</button>
            </div>
        </div>
    )
}