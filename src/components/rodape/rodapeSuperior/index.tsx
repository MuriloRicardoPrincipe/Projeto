import Style from './rodapeSuperior.module.scss'

export default function RodapeSuperior() {
    return (
        <div className={Style.Conteiner}>
            <div>
                <form>
                    <div>
                        <h3 className={Style.titulo}><span className={Style.barra}>/</span>Receba Novidades</h3>
                    </div>

                    <p className={Style.texto}>Assine nossa newsletter e receba novidades todos
                        os dias no seu email.</p>
                    <input className={Style.pesquisa} type="text" placeholder="Pesquisar"/><button className={Style.botao}>Assinar agora</button>
                </form>
            </div>
            <div>
                <form>
                    <div>
                        <h3 className={Style.titulo}><span className={Style.barra}>/</span>Enviar sua Matéria</h3>
                    </div>
                    <p className={Style.texto}>Digite seu nome e clique no botão ao lado para postar sua matéria.</p>
                    <input className={Style.pesquisa} type="text" placeholder="Pesquisar"/><button className={Style.botao}>Anexar arquivo</button>
                </form>
            </div>
        </div>
    );
}