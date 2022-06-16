/* eslint-disable jsx-a11y/anchor-is-valid */
import Style from './MenuInferior.module.scss'

export default function MenuInferior() {
    return (
        <div className={Style.Conteiner}>
            <nav>
                <ul>
                    <li className={Style.Conteiner}>
                        <a className={Style.Link}>HOME</a>
                        <a className={Style.Link}>ENTRETENIMENTO</a>
                        <a className={Style.Link}>REGIONAL</a>
                        <a className={Style.Link}>MAIS LIDAS</a>
                        <a className={Style.Link}>COTIDIANO</a>
                        <a className={Style.Link}>TRÂNSITO</a>
                        <a className={Style.Link}>POLICIAL</a>
                        <a className={Style.Link}>ESPORTE</a>
                        <a className={Style.Link}>AGRO</a>
                        <a className={Style.Link}>PESO ARGENTINO NA FRONTEIRA HOJE: R$0,28</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}