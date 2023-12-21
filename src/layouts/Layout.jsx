import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Resumen from '../components/resumen';


export default function Layout() {
    return (
        <div className='md:flex '>

            <Sidebar />
            <main className='flex-1'>
                <Outlet />

            </main>

            <Resumen />

        </div>
    )
}
