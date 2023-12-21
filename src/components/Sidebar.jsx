import Categoria from '../components/Categoria';
import {categorias} from '../data/categorias';
export default function Sidebar() {
    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img  
                    className="w-40"
                    src="img/logo.png"
                />
            </div>

            <div className='mt-10'>
                {categorias.map( categoria => (
                    <Categoria
                        categoria={categoria}
                    />
                ))}
            </div>



        </aside>
    )
}
