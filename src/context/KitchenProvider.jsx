import { createContext, useState } from 'react';
import { categorias as categoriasDB } from '../data/categorias';

const KitchenContext = createContext();

const KitchenProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

    console.log(categorias);
    
    const handleClickCategoria = id => {
        const categoria = categorias.filter( cat => cat.id === id)[0];
        setCategoriaActual(categoria);
    }


    return (
        <KitchenContext.Provider

            value={{
                categorias,
                categoriaActual,
                handleClickCategoria
            }}
        >{children}</KitchenContext.Provider>

    )
}
export {
    KitchenProvider
}
export default KitchenContext;