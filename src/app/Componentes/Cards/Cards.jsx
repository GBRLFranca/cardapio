import estilos from './Cards.module.css'
import Image from "next/image";

export default function Cards(produto) {
    return (
        <div className={estilos.container_card}>
            <div>
                <Image src={produto.imagem} className={estilos.imagem_card} alt='imagem do prato' />
            </div>
            <div className={estilos.infos_card}>
                <div>
                    <h3>{produto.nome}</h3>
                    <small>{produto.categoria}</small>
                    <p>{produto.descricao}</p>
                </div>
                {/*formata o numero para o estilo da moeda brasileira  */}
                <span>{new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(produto.preco)}</span>
            </div>
        </div>
    )
}