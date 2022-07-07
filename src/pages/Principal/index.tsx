
import { Outlet } from "react-router-dom";

import Style from "./Principal.module.scss";
import NoticiasDoDia from "./secao1";
import Aovivo from "./secao2";
import ClassificadosGeral from "./secao3/Index";
import Receitas from "./secao4";
import Regional from "./secao5";
import Esporte from "./secao6";

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
            </div>

            <div>
                <Outlet/>
                {children}
            </div>
        </>
    )

}