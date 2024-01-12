import { useAuth } from '../hooks/useAuth';
import useKitchen from '../hooks/useKitchen';
import Categoria from '../components/Categoria';

export default function Sidebar() {

    const { categorias } = useKitchen();
    const { logout, user } = useAuth({
        middleware: 'auth'
    });

    return (
        <aside className="md:w-72">
            <div className=" flex flex-col justify-center items-center">
                <img
                    className=" w-50"
                    src="/img/logo.png"
                    alt='Imagen Logo'
                />
            </div>

            <p className='my-5 text-xl text-center'>Hola <span className=' font-bold'>{user?.name}</span></p>

            <div className='mt-6'>
                {categorias.map(categoria => (
                    <Categoria
                        categoria={categoria}
                        key={categoria.id}
                    />
                ))}
            </div>
            <div className='my-5 px-5'>
                <button
                    onClick={logout}
                    type='button'
                    className='text-center bg-red-500 w-full p-3 font-bold text-white truncate hover:bg-red-600'
                >
                    Cancelar Orden
                </button>

            </div>



        </aside>
    )
}
