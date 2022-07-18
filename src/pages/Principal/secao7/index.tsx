import Enquete from "./Enquetes/enquetes";
import MaisLidas from "./MaisLidas/maisLidas";
import Style from './SecaoMaisLidas.module.scss';
import VoceNaMidia from "./VoceNaMidia/voceNaMidia";
import MostrandoVoceNaMidia from './MostrandoVoceNaMidia/index';

export default function SecaoMaisLidas(){
    return (
        <div className={Style.Conteiner}>
            <div className={Style.ConteinerMaisLidas}>
                <MaisLidas/>
            </div>
            <div className={Style.ConteinerEnquete}>
                <Enquete/>
                <VoceNaMidia/>
                <MostrandoVoceNaMidia/>
            </div>
        </div>
    )
}