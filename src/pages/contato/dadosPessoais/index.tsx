import Style from './DadosPessoais.module.scss'


export default function DadosPessoais() {
    return (
        <div>

            <h3 className={Style.div__contato__titulo}>Mídia Sudoeste</h3>
            <h4 className={Style.div__contato__tituloh4}>Telefone</h4>
            <p className={Style.div__contato__titulop}>(66)99933-3399(fixo)</p>
            <p className={Style.div__contato__titulop}>(66)99933-3399(whatsapp)</p>


            <h4 className={Style.div__contato__tituloh4}>Localização</h4>
            <p className={Style.div__contato__titulop}>Av.Amazonas, 1747</p>
            <p className={Style.div__contato__titulop}>CEP 85730-000</p>
            <p className={Style.div__contato__titulop}>Fone:(46)3540-1800</p>
            <p className={Style.div__contato__titulop}>comercial@maxxforte.com.br</p>

        </div>
    )
}