import IReceitas from "./IReceitas"

export default interface IPessoa{
    id: number
    nome: string
    receitas:IReceitas
}