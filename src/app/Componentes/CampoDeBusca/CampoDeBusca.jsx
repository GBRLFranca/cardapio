import estilos from './CampoDeBusca.module.css'
import Image from 'next/image';
import Lupa from '../../../../public/lupa.png';

export default function CampoDeBusca(props) {
    return (
        <div className={estilos.section_busca}>
            <div className={estilos.container_busca}>
                <Image src={Lupa} className={estilos.lupa} />
                <input value={props.value} onChange={props.onChange} type="text" placeholder='Pesquise aqui um dos pratos do nosso cardápio' />
            </div>
        </div>
    )
}