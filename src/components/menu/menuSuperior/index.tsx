/* eslint-disable jsx-a11y/anchor-is-valid */
import logoMidia from '../../../assets/Imagens/logo/midiaSudoeste.png';
import logoFace from '../../../assets/Imagens/iconespng/facebook.png';
import logoTw from '../../../assets/Imagens/iconespng/tw.png';
import logoInst from '../../../assets/Imagens/iconespng/insta.png';
import logoYou from '../../../assets/Imagens/iconespng/you.png';
import logoWt from '../../../assets/Imagens/iconespng/wt.png';
import AoVivo from '../../../assets/Imagens/iconespng/aoVivo.png';
import Style from './MenuSuperior.module.scss'
import { Link } from 'react-router-dom';

export default function MenuSuperior() {
    return (
        <div  className={Style.Conteiner}>
            <nav>
                <ul>
                    <li className={Style.Conteiner}>
                        <Link className={Style.BotaoLink} to={'/fale-conosco'}>FALE CONOSCO</Link>
                        <a className={Style.BotaoLink}>EXPEDIENTE</a>
                        <a><img className={Style.BotaoLinkAoVivo} src={AoVivo} alt="Botão ao vivo" /></a>
                        <a><img className={Style.BotaoLinkImage} src={logoFace} alt="Botão facebook" /></a>
                        <a><img className={Style.BotaoLinkImage} src={logoTw} alt="Botão twitter" /></a>
                        <a><img className={Style.BotaoLinkImage} src={logoInst} alt="Botão instagram" /></a>
                        <a><img className={Style.BotaoLinkImage} src={logoYou} alt="Botão You Tube" /></a>
                        <a><img className={Style.BotaoLinkImage} src={logoWt} alt="Botão Whatsapp" /></a>
                        <Link to={'/'}><img className={Style.BotaoLink} src={logoMidia} alt="Botão MidiaSuldoeste.com.br" /></Link>
                        <a className={Style.BotaoLink}>PREVISAO DE TEMPO</a>
                    </li>
                </ul>
            </nav>
            <div>
                <form action="">
                    <input className={Style.BarraPesquisa} type="text" placeholder="Pesquisar"/><button className={Style.BotaoPesquisa}></button>
                </form>
            </div>
        </div>
    )
}