import Menu from 'components/menu';
import Rodape from 'components/rodape';
import { useState } from 'react';
import Anuncios from './Anuncios/anuncios';
import BotaoAnunciar from './BotaoAnunciar';
import Buscador from './buscador';
import Style from './Classificados.module.scss';
import Filtros from './filtro/filtro';




export default function Classificados() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number|null>(null);
    const [ordenador, setOrdenador] = useState("");
    return (
        <><Menu />
            <div>
                <h2 className={Style.formulario__titulo}><span className={Style.Roxo}>/</span>Classificados<span className={Style.Roxo}>.</span></h2>
                <div className={Style.Conteiner}>
                    <div className={Style.ConteinerN2}>
                        <Buscador busca={busca} setBusca={setBusca}/>
                    </div>
                    <div className={Style.ConteinerN2}>
                        <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    </div>
                    <div className={Style.ConteinerN2}>
                        <BotaoAnunciar/>
                    </div>
                </div>
            </div>
            <div className={Style.ConteinerAnuncios}>
                <Anuncios busca={busca} filtro={filtro} ordenador={ordenador} />
            </div>
            <Rodape />
        </>
    )
}