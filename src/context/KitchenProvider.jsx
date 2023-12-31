import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import clienteAxios from '../config/axios';

const KitchenContext = createContext();

const KitchenProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const nuevoTotal = pedido.reduce( (totalN, productoN) => (productoN.precio * productoN.cantidad) + totalN, 0 );
        setTotal(nuevoTotal);
    }, [pedido]);

    const obtenerCategorias  = async () => {
        try {
            const {data} = await clienteAxios('/api/categorias/');
            setCategorias(data.data);
            setCategoriaActual(data.data[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        obtenerCategorias();
    }, []);

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

    const handleAgregarPedido = ({ categoria_id, ...producto }) => { // elimino elementos innecesarios del objeto

        if (pedido.some(pedidoState => pedidoState.id === producto.id)) {
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState);
            setPedido(pedidoActualizado);
            toast.success('Actualizado Correctamente!');

        } else {
            setPedido([...pedido, producto]); // agrego objeto al array
            toast.success('Agregado Correctamente!');
        }
    }

    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter( producto => producto.id === id)[0];
        setProducto(productoActualizar);
        setModal(!modal);
    }

    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter( producto => producto.id !== id);
        setPedido(pedidoActualizado);
        toast.success('Producto Eliminado');
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
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total
            }}
        >{children}</KitchenContext.Provider>
    )
}
export {
    KitchenProvider
}
export default KitchenContext;