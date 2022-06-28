/* eslint-disable react-hooks/exhaustive-deps */
import produto from "../../../data/produto.json"
import Anuncio from "./Anuncio/anuncio";
import Style from "./Anuncios.module.scss";
import { useState, useEffect } from "react";
import { Produtos } from "types/IProduto";

interface Props {
    busca: string,
    filtro: number | null,
    ordenador: string | number;
  }
  
  export default function Anuncios(props: Props) {
    const [lista, setLista] = useState(produto);
    const { busca, filtro, ordenador } = props;
  
    function testaBusca(titulo: string) {
      const regex = new RegExp(busca, 'i');
      return regex.test(titulo);
    }
  
    function testaFiltro(id: number) {
      if(filtro !== null) return filtro === id;
      return true;
    }
  
    function ordenar(novaLista: Produtos) {
      switch(ordenador) {
        case 'preco':
          return novaLista.sort((a,b) => a.preco > b.preco ? 1 : -1);
        default:
          return novaLista; 
      }
    }
  
    useEffect(() => {
      const novaLista = produto.filter(item => testaBusca(item.titulo) && testaFiltro(item.categoria.id));
      setLista(ordenar(novaLista));
    },[busca, filtro, ordenador])
  
    return (
      <div className={Style.Conteiner}>
        {lista.map(item => (
          <Anuncio key={item.id} {...item} />
        ))}
      </div>
    )
  }