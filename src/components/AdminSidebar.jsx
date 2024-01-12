import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function AdminSidebar() {

    const { logout } = useAuth({ middleware: 'auth' });
    return (
        <aside className="md:w-72 h-screen">
            <div className="p-4">
                <div className=" flex flex-col justify-center items-center">
                    <img
                        className=" w-50"
                        src="/img/logo.png"
                        alt='Imagen Logo'
                    />
                </div>

                <nav className='flex flex-col p-4 items-center'>
                    <Link to="/admin" className='font-bold text-xl'>Pedidos</Link>
                    <Link to="/admin/productos" className='font-bold text-xl'>Productos</Link>
                </nav>

                <div className='my-5 px-5'>
                    <button
                        onClick={logout}
                        type='button'
                        className='text-center bg-red-500 w-full p-3 font-bold text-white truncate hover:bg-red-600'
                    >
                        Cerrar Sesión
                    </button>

                </div>

            </div>
        </aside>
    )
}