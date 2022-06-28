import Produto from "../../../../data/produto.json";
import Style from "./Anuncio.module.scss";

type Props = typeof Produto[0];

export default function Anuncio(props:Props){
    const { titulo, categoria, preco, foto } = props;
    return(
        <div className={Style.ConteinerN2}>
            <div>
                <img className={Style.Foto} src={foto} alt={titulo} />
            </div>
            <div className={Style.ConteinerDescricao}>
                <h2 className={Style.Categoria}>{categoria.label}</h2>
                <h3 className={Style.TituloProduto}>Nome: {titulo}</h3>
                <p>R${preco.toFixed(2)}</p>
            </div>
        </div>
    )
} 