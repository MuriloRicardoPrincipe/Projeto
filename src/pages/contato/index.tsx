import DadosPessoais from './dadosPessoais';
import Style from './FaleConosco.module.scss'
import Localizacao from './localizacao';
import tele from '../../assets/Imagens/iconespng/telefoneRoxo.png'
import localiza from '../../assets/Imagens/iconespng/LocalizaRoxo.png'
import Menu from 'components/menu';
import Rodape from 'components/rodape';

export default function FaleConosco() {

    //const [nome, setNome] = useState("");
    //const [email, setEmail] = useState("");
    //const [telefone, setTelefone] = useState("");
    //const [whatsapp, setWhatsapp] = useState("");

    return (
        <>
        <div>
            <Menu/>
        </div>
        <div>
            <h2 className={Style.formulario__titulo}><span className={Style.Roxo}>/</span>Fale Conosco<span className={Style.Roxo}>.</span></h2>
        </div>
            <div className={Style.formulario__conteinerN1}>
                <div className={Style.formulario__conteinerN2}>
                    <form>
                        <div>
                            <input name='nome'
                                className={Style.formulario__input}
                                type="text"
                                placeholder="Nome"
                                data-tipo="nome"
                                required />
                            <input name="email"
                                className={Style.formulario__input}
                                id="email"
                                type="email"
                                placeholder="Email"
                                data-tipo="email"
                                required />
                        </div>
                        <div>
                            <input name="telefone"
                                className={Style.formulario__input}
                                id="telefone"
                                type="telefone"
                                placeholder="telefone"
                                data-tipo="telefone"
                                required />
                            <input name="telefone"
                                className={Style.formulario__input}
                                id="telefone"
                                type="Whatsapp"
                                placeholder="Whatsapp"
                                data-tipo="Whatsapp"
                                required />
                        </div>
                        <select className={Style.formulario__selecionarDP}>
                            <option>Selecione um departamento </option>
                            <option>Tarde</option>
                            <option>Noite</option>
                        </select>
                        <select className={Style.formulario__selecionarCD}>
                            <option>Estado </option>
                            <option>Tarde</option>
                            <option>Noite</option>
                        </select>
                        <select className={Style.formulario__selecionarES}>
                            <option>Cidade </option>
                            <option>Tarde</option>
                            <option>Noite</option>
                        </select>
                        <div>
                            <textarea
                                className={Style.formulario__mensagem}
                                placeholder="Escreva aqui sua mensagem"
                                id="mensagem"
                                required></textarea>
                        </div>
                        <div>
                            <button className={Style.formulario__botao}>Enviar Mensagem</button>
                        </div>

                    </form>
                </div>
                <div>
                    <img className={Style.formulario__conteinerFoto} src={tele} alt="" />
                    <img className={Style.formulario__conteinerFoto} src={localiza} alt="" />
                </div>
                <div>
                    <DadosPessoais />
                </div>
            </div>
            <div>
                <Localizacao />
            </div>
            <Rodape/>
        </>
    );
}