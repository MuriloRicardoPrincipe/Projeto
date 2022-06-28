import Menu from "components/menu";
import Rodape from "components/rodape";

import Style from "./Principal.module.scss";
import Secao from "./secao1";
import Aovivo from "./secao2";

export default function Principal() {
    return (
        <>
            <div>
                <Menu />
            </div>
            <div>
                <section className={Style.secao}>
                    <Secao/>
                </section>
                <section className={Style.secao}>
                    <Aovivo/>
                </section>
            </div>
            <div>
                <Rodape />
            </div>
        </>
    )

}