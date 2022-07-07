import MenuInferior from "./menuInferior";
import MenuSuperior from "./menuSuperior";
import Style from "./menu.module.scss"

export default function Menu(){
    return (
        <header>
            <div>
                <MenuSuperior/>
            </div>
            <div className={Style.Linha}>
            </div>
            <div>
                <MenuInferior/>
            </div>
        </header>
    )
}