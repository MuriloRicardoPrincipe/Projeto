/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import Style from './rodapeInferior.module.scss'

export default function RodapeInferior(){
    return(
        <div className={Style.conteiner__rodape__inferior}>
            <div>
                <p className={Style.cabecalho__midia}>&copy;2022 Midia Sudoeste. Desenvolvimento Midia Sudoeste. All Rights Reserved.</p>
            </div>
            <div>
                <Link className={Style.cabecalho__link} to={'/fale-conosco'}>FALE CONOSCO</Link>
                <a className={Style.cabecalho__link}>EXPEDIENTE</a>
                <a className={Style.cabecalho__link}>MAPA DO SITE</a>
            </div>
        </div>
    );
}