import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { categorias as categoriasDB } from '../data/categorias';

const KitchenContext = createContext();

const KitchenProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);

    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id)[0];
        setCategoriaActual(categoria);
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleSetProducto = producto => {
        setProducto(producto);
    }

    const handleAgregarPedido = ({ categoria_id, imagen, ...producto }) => { // elimino elementos innecesarios del objeto

        if (pedido.some(pedidoState => pedidoState.id === producto.id)) {
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState);
            setPedido(pedidoActualizado);
            toast.success('Actualizado Correctamente!');

        } else {
            setPedido([...pedido, producto]); // agrego objeto al array
            toast.success('Agregado Correctamente!');
        }
    }

    return (
        <KitchenContext.Provider

            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido
            }}
        >{children}</KitchenContext.Provider>
    )
}
export {
    KitchenProvider
}
export default KitchenContext;