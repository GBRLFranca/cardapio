'use client'
import { useState } from "react"
import estilos from './Categorias.module.css';
import Image from 'next/image';
import Entrada from '../../../../public/entrada.png';
import Massa from '../../../../public/massa.png';
import Carne from '../../../../public/carne.png';
import Bebidas from '../../../../public/bebidas.png';
import Salada from '../../../../public/salada.png';
import Sobremesa from '../../../../public/sobremesa.png';

export default function Categorias({ mudarCategoria, categoriaAtiva }) {

    return (
        <div className={estilos.container_categorias}>
            <nav className={estilos.nav_categorias}>
                <button onClick={() => mudarCategoria("entradas")} className={categoriaAtiva == "entradas" ? estilos.botao_atual : estilos.botao_categoria}>
                    <Image className={estilos.img_botao} src={Entrada} alt='imagem do prato' /><span>Entradas</span>
                </button>
                <button onClick={() => mudarCategoria("massas")} className={categoriaAtiva == "massas" ? estilos.botao_atual : estilos.botao_categoria}>
                    <Image className={estilos.img_botao} src={Massa} alt='imagem do prato' /><span>Massas</span>
                </button>
                <button onClick={() => mudarCategoria("carnes")} className={categoriaAtiva === "carnes" ? estilos.botao_atual : estilos.botao_categoria}>
                    <Image className={estilos.img_botao} src={Carne} alt='imagem do prato' /><span>Carnes</span>
                </button>
                <button onClick={() => mudarCategoria("bebidas")} className={categoriaAtiva === "bebidas" ? estilos.botao_atual : estilos.botao_categoria}>
                    <Image className={estilos.img_botao} src={Bebidas} alt='imagem do prato' /><span>Bebidas</span>
                </button>
                <button onClick={() => mudarCategoria("saladas")} className={categoriaAtiva === "saladas" ? estilos.botao_atual : estilos.botao_categoria}>
                    <Image className={estilos.img_botao} src={Salada} alt='imagem do prato' /><span>Saladas</span>
                </button>
                <button onClick={() => mudarCategoria("sobremesas")} className={categoriaAtiva === "sobremesas" ? estilos.botao_atual : estilos.botao_categoria}>
                    <Image className={estilos.img_botao} src={Sobremesa} alt='imagem do prato' /><span>Sobremesas</span>
                </button>
            </nav>
        </div>
    )
}