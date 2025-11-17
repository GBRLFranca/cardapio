'use client'
import { useState } from "react";
import Image from "next/image";
import estilos from "./page.module.css";
import Banner from '../../public/banner.png';
import Categorias from "./Componentes/Categorias/Categorias";
import CampoDeBusca from "./Componentes/CampoDeBusca/CampoDeBusca";
import Cards from "./Componentes/Cards/Cards.jsx";
import { ListaTotalPratos } from "./servicos/servicos.js";
import { ListaFiltrada } from "./servicos/servicos.js"

export default function Home() {

  const [listaPratos, setListaPratos] = useState(ListaTotalPratos())
  const [pesquisaTexto, setPesquisaTexto] = useState("");
  const [escolheCategoria, setEscolheCategoria] = useState("")

  const buscaTexto = (textoDigitado) => {
    setPesquisaTexto(textoDigitado);
    setEscolheCategoria("")

    if (textoDigitado.length > 3) {
      setListaPratos(ListaFiltrada(textoDigitado))
    } else if (textoDigitado.length === 0) {
      setListaPratos(ListaTotalPratos())
    }
  }

  const limpaTexto = () => {
    setPesquisaTexto("")
  }


  const botaoFiltro = (categoria) => {
    limpaTexto()
    setEscolheCategoria(categoria)

    if (categoria === "") {
      setListaPratos(ListaTotalPratos())
    } else {
      const ListaFiltradaPorBotao = ListaTotalPratos().filter((prato) => prato.categoria.toLowerCase() === categoria.toLowerCase())
      setListaPratos(ListaFiltradaPorBotao);
    }

  }


  return (
    <div className={estilos.home}>
      <header className={estilos.banner}>
        <Image src={Banner} className={estilos.img_banner} alt="banner" />
        <div className={estilos.cabecalho}>
          <h1>RESTAURANT</h1>
          <p>De pratos clássicos a criações surpreendentes nesse cardápio é um requinte de sabores refinados</p>
        </div>
      </header>
      <Categorias mudarCategoria={botaoFiltro} categoriaAtiva={escolheCategoria} />
      <CampoDeBusca value={pesquisaTexto} onChange={(event) => buscaTexto(event.target.value)} />
      <main>
        <h2>Cardápio</h2>
        <div className={estilos.container_produtos}>
          {listaPratos.map((produto, index) => (
            <Cards key={index} imagem={produto.imagem} nome={produto.nome} categoria={produto.categoria} descricao={produto.descricao} preco ={produto.preco}/>
          ))}
        </div>
      </main>
    </div >
  );
}