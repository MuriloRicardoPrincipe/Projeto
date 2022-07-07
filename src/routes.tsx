import Menu from "components/menu";
import Rodape from "components/rodape";
import Classificados from "pages/Anunciante";
import FaleConosco from "pages/contato";
import Principal from "pages/Principal";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function appRouter(){
    return(
        <main>
            <Router>
                <Menu/>
                <Routes>
                    <Route path="/" element={<Principal/>}/>
                    <Route path="/classificados" element={<Classificados/>}/>
                    <Route path="/fale-conosco" element={<FaleConosco/>}/>
                </Routes>
                <Rodape/>
            </Router>
        </main>
    )
}