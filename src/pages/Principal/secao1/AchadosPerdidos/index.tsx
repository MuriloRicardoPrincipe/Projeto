import Style from './AchadosPerdidos.module.scss'
import FormularioAchados from './FormularioAchados';
import FormularoElogia from './FormularioRElogie';
import publicidade from '../../../../assets/Imagens/propaganda/casadoveneno.png'
import { BiChevronRightCircle } from 'react-icons/bi';



export default function AchadosPerdidos() {

    return (
        <div>
            <div className={Style.ConteinerSecao}>
                <h2 className={Style.Titulo}><span className={Style.TituloBarra}>/</span><span className={Style.Achados}>Achados</span> e <span className={Style.Perdidos}>Perdidos</span></h2>
                <div className={Style.Barra}></div>
                <a className={Style.Link} href="">Todos os itens<BiChevronRightCircle/></a>
            </div>
            <div>
                <div className={Style.Formulario}>
                    <FormularioAchados />
                    <FormularoElogia/>
                </div>
                <div><img className={Style.publicidade} src={publicidade} alt="" /></div>
            </div>
        </div>
    )
}