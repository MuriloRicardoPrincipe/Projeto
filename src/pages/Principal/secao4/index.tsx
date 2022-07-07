import IPessoa from 'interfaces/IPessoa';
import { Form } from 'react-bootstrap'
import Style from './Receitas.module.scss'
import receitas from '../../../assets/Imagens/iconespng/receitas.png';
import { BiChevronRightCircle } from 'react-icons/bi';

const receitar: IPessoa[] = [
    {
        id: 1,
        nome: "Murilo",
        receitas: {
            id: 1,
            nome: "Receita Fácil de Lasanha com Molho a Bolonhesa",
            imagem: 'https://receitassaborosa.com/wp-content/uploads/2019/12/Lasanha-com-Molho-a-Bolonhesa.jpg',
            descricao: 'Receita Fácil de Lasanha com Molho a Bolonhesa. Além disso, aprenda a fazer a Receita Fácil de Lasanha com Molho a Bolonhesa. Hoje fazemos um prato italiano de lasanha com molho à bolonhesa, é verdade que o molho à bolonhesa é preparado em um marinex branco mas o resultado é único, quanto mais o cozimento for longo e o molho cremoso, eu já tinha postou anteriormente a receita de molho à bolonhesa. Sua lasanha só será excelente com esse molho. Portanto, conheça agora a Receita Fácil de Lasanha com Molho a Bolonhesa.',
            pessoa: 1
        }
    },
    {
        id: 2,
        nome: "Ana",
        receitas:
        {
            id: 2,
            nome: "Receita Fácil de Lasanha com Molho a Bolonhesa",
            imagem: 'https://receitassaborosa.com/wp-content/uploads/2019/12/Lasanha-com-Molho-a-Bolonhesa.jpg',
            descricao: 'Receita Fácil de Lasanha com Molho a Bolonhesa. Além disso, aprenda a fazer a Receita Fácil de Lasanha com Molho a Bolonhesa. Hoje fazemos um prato italiano de lasanha com molho à bolonhesa, é verdade que o molho à bolonhesa é preparado em um marinex branco mas o resultado é único, quanto mais o cozimento for longo e o molho cremoso, eu já tinha postou anteriormente a receita de molho à bolonhesa. Sua lasanha só será excelente com esse molho. Portanto, conheça agora a Receita Fácil de Lasanha com Molho a Bolonhesa.',
            pessoa: 2
        }
    },

]

export default function Receitas() {
    let pratosRecomendados = [...receitar];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 2);

    return (
        <div>
            <div className={Style.Conteiner}>
                <h2 className={Style.Titulo}><span className={Style.ContraBarra}>/</span>Receitas</h2>
                <div className={Style.Barra}>
                </div>
                <a className={Style.LinkParaTodaAsReceitas} href="">todas receitas <BiChevronRightCircle/></a>
            </div>

            <div className={Style.ConteinerConteudo}>
                <div className={Style.ConteinerExpondoReceitas}>
                    <div className={Style.ConteinerReceitas}>
                        {pratosRecomendados.map(item => (
                            <div className={Style.Receitas} key={item.id}>
                                <img className={Style.ReceitaIMG} src={item.receitas.imagem} alt={item.receitas.nome} />
                                <a className={Style.ReceitaTitular} href="">{item.nome}</a>
                                <a className={Style.ReceitaNome} href=""><h2>{item.receitas.nome}</h2></a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={Style.ConteinerForm}>
                    <div className={Style.ConteinerFormReceitas}>
                        <Form>
                            <div className={Style.DivReceitas}>
                                <img src={receitas} alt="" />
                                <div>
                                    <h2 className={Style.ReceitasTitulo} ><span className={Style.BarraVerde}>/</span>receitas caseiras</h2>
                                    <p className={Style.ReceitasTexto}>Compartilhe seus pratos</p>
                                </div>
                            </div>

                            <Form.Group className={Style.ConteinerForm} controlId="formGroupEmail">
                                <Form.Control className={Style.Input} type="name" placeholder="Digite seu nome" />
                            </Form.Group>
                            <Form.Group className={Style.ConteinerForm} controlId="formGroupEmail">
                                <Form.Control className={Style.Input} type="receita" placeholder="Digite o nome da receita" />
                                <Form.Group className={Style.ConteinerForm} controlId="exampleForm.ControlTextarea1">
                                    <Form.Control className={Style.Input} as="textarea" placeholder="Escreva aqui os igredientes" />
                                </Form.Group>
                                <Form.Group className={Style.ConteinerForm} controlId="exampleForm.ControlTextarea1">
                                    <Form.Control className={Style.Input} as="textarea" placeholder="Escreva aqui o modo de preparo" />
                                </Form.Group>
                                <Form.Group className={Style.ConteinerForm} controlId="formFileSm" >
                                    <Form.Control className={Style.Input} type="file" size="sm" />
                                </Form.Group>
                            </Form.Group>
                            <button className={Style.BotaoEnviar}>Enviar</button>
                        </Form>
                    </div>
                </div>

            </div>
        </div>
    )
}