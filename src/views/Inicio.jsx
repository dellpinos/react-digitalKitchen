import useSWR from 'swr';
import Producto from '../components/Producto';
import clienteAxios from '../config/axios';
import useKitchen from '../hooks/useKitchen';


export default function Inicio() {

    const { categoriaActual } = useKitchen();

    // const fetcher = () => clienteAxios('/api/productos').then(data => data.data);

    const fetcher = async() => {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
            const resultado = await clienteAxios('/api/productos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return resultado.data.data;
        } catch (error) {
            console.log(error);
        }
    }

    // Consulta SWR
    const { data, error, isLoading } = useSWR('/api/productos', fetcher);


    if(isLoading) return "One moment, please...";


    const productos = data.filter( producto => producto.categoria_id === categoriaActual.id);

    return (
        <>
            <h1 className='text-4xl font-black'>{ categoriaActual.nombre}</h1>
            <p className='text-2xl my-10'>
                Elige y personaliza tu pedido a continuación
            </p>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {productos.map(producto => (
                    <Producto
                        botonAgregar={true}
                        key={producto.imagen}
                        producto={producto}
                    />
                ))}
            </div>
        </>
    )
}
