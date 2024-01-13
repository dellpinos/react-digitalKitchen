import { formatearDinero } from "../helpers";
import useKitchen from "../hooks/useKitchen";

export default function Producto({ producto, botonAgregar = false, botonDisponible = false }) {

    const { handleClickModal, handleSetProducto, handleClickProductoAgotado } = useKitchen();

    const { nombre, imagen, precio } = producto;

    return (
        <div className="border p-3 shadow bg-white">
            <img
                alt={`Imagen ${nombre}`}
                className="w-full"
                src={`/img/${imagen}.jpg`}
            />
            <div className="p-5">
                <h3 className=" text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>
                {botonAgregar && (
                    <button
                        type="button"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                        onClick={() => {
                            handleClickModal();
                            handleSetProducto(producto);
                        }}
                    >
                        Agregar
                    </button>
                )}

                {botonDisponible && (
                    <button
                        type="button"
                        className={`${!producto.disponible ? 'bg-red-500 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-800'}   text-white w-full mt-5 p-3 uppercase font-bold`}
                    
                        onClick={() => {
                            handleClickProductoAgotado(producto.id);
                        }}
                    >
                        {producto.disponible ? "Marcar como Agotado" : "Marcar como Disponible"}
                        
                    </button>
                )}
            </div>


        </div>
    )
}
