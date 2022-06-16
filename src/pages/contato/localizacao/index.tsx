/* eslint-disable jsx-a11y/iframe-has-title */
import Style from './localizacao.module.scss'
export default function Localizacao(){
    return(
        <div>
            <iframe className={Style.mapa} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14342.119367267484!2d-53.7390363!3d-26.0162145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5dfc8a51ff6a1292!2sMaxxForte%20Pulverizadores!5e0!3m2!1spt-BR!2sbr!4v1655204619691!5m2!1spt-BR!2sbr"
             width="1440"
             height="300"
            loading="lazy"></iframe>
        </div>
    );
}