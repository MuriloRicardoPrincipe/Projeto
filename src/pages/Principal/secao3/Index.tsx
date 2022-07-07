import Style from './Classificados.module.scss';
import produtos from '../../../data/produto.json';
import { Produto } from 'types/IProduto';
import { useNavigate } from 'react-router-dom';
import DesejaAnunciar from './BotaoAnunciar';
import BotaoAnuncios from './BotaoAnuncios';

export default function ClassificadosGeral() {

    let classificadosAleatorio = [...produtos];
    classificadosAleatorio = classificadosAleatorio.sort(() => 0.5 - Math.random()).splice(0, 4);
    const navigador = useNavigate();

    function redirecionandoParaDetalhes(produto: Produto) {
        navigador(`/produto/${produto.id}`, { state: { produto }, replace: true })
    }
    return (
        <div className={Style.ConteinerPrincipal}>
            <div className={Style.ConteinerTitulo}>
                <h2 className={Style.Titulo}><span className={Style.TituloBarra}>/</span>Classificados</h2>
                <div className={Style.Barra}></div>
                <div className={Style.ConteinerBotao}>
                    <DesejaAnunciar />
                    <BotaoAnuncios />
                </div>
            </div>
            <div className={Style.ConteinerProduto}>
                {classificadosAleatorio.map(item => (
                    <div key={item.id} className={Style.AlinhandoProduto}>
                        <img className={Style.imgProduto} src={item.foto} alt={item.titulo} />
                        <h3 className={Style.tituloProduto}>{item.titulo}</h3>
                        <h4 className={Style.precoProduto}>R${item.preco.toFixed(2)}</h4>
                    </div>
                ))}
            </div>

        </div>
    )

}