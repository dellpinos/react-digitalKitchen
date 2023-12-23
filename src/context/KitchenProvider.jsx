import { createContext, useState } from 'react';
import { categorias, categorias as categoriasDB} from '../data/categorias';

const KitchenContext = createContext();

const KitchenProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB);

    return (
        <KitchenContext.Provider

            value={{
                categorias
            }}
        >{children}</KitchenContext.Provider>

    )
}
export {
    KitchenProvider
}
export default KitchenContext;