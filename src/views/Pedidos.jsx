import useSWR from "swr";
import clienteAxios from "../config/axios";
import { formatearDinero } from '../helpers';
import useKitchen from '../hooks/useKitchen';

export default function Pedidos() {

    const token = localStorage.getItem('AUTH_TOKEN');
    const fetcher = () => clienteAxios('/api/pedidos', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const { data, error, isLoading } = useSWR('/api/pedidos', fetcher, {refreshInterval: 10000} );
    const { handleClickCompletarPedido} = useKitchen();

    if (isLoading) return 'One moment please...'

    return (
        <div>
            <h1 className='text-4xl font-black'>Pedidos</h1>
            <p className='text-2xl my-10'>
                Administra los pedidos desde aquí
            </p>

            <div className="grid grid-cols-2 gap-3">
                {data.data.data.map(pedido => (
                    <div key={pedido.id} className=" border-2 border-indigo-500 p-5 bg-white shadow rounded-xl">
                        <p className="text-xl font-bold text-slate-600">
                            Contenido del Pedido:
                        </p>
                        {pedido.productos.map(producto => (
                            <div
                                key={producto.id}
                                className="border-b border-b-slate-200 last-of-type:border-none py-4"
                            >
                                <p className="text-sm">ID: {producto.id}</p>
                                <p >{producto.nombre}</p>
                                <p>
                                    Cantidad: {' '}
                                    <span className="font-bold">{producto.pivot.cantidad}</span>
                                </p>
                            </div>
                        ))}

                        <p className="text-lg font-bold text-right text-black">
                            Cliente: {' '}
                            <span className="font-normal text-xl mt-2">{pedido.user.name}</span>
                        </p>
                        <p className="text-center my-8 text-4xl font-bold text-amber-500">
                            Total: {' '}
                            <span className="font-normal text-slate-600">{formatearDinero(pedido.total)}</span>
                        </p>

                        <button
                            type="button"
                            onClick={ () => handleClickCompletarPedido(pedido.id) }
                            className='bg-indigo-600 hover:bg-indigo-800  px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer'
                        >Completar Pedido</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
