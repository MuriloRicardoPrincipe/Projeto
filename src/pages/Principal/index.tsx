
import { Outlet } from "react-router-dom";

import Style from "./Principal.module.scss";
import NoticiasDoDia from "./secao1";
import Aovivo from "./secao2";
import ClassificadosGeral from "./secao3/Index";
import Receitas from "./secao4";
import Regional from "./secao5";
import Esporte from "./secao6";
import SecaoMaisLidas from "./secao7";
import Eventos from "./secao8";

export default function Principal({ children }: { children?: React.ReactNode}) {
    return (
        <>
            <div className={Style.secao}>
                <section>
                    <NoticiasDoDia/>
                </section>
                <section>
                    <Aovivo/>
                </section>
                <section>
                    <ClassificadosGeral/>
                </section>
                <section>
                    <Receitas/>
                </section>
                <section>
                    <Regional/>
                </section>
                <section>
                    <Esporte/>
                </section>
                <section>
                    <SecaoMaisLidas/>
                </section>
                <section className={Style.Eventos}>
                    <Eventos/>
                </section>
            </div>

            <div>
                <Outlet/>
                {children}
            </div>
        </>
    )

}