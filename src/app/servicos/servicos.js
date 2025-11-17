import { produtos } from "../dados/dados";

export function ListaTotalPratos() {
    return produtos;
}

export function ListaFiltrada(textoDigitado) {
    return produtos.filter((prato) =>
        prato.nome.toLowerCase().includes(textoDigitado.toLowerCase())
    );
}
