import { useContext } from 'react';
import KitchenContext from '../context/KitchenProvider';

const useKitchen = () => {
    return useContext(KitchenContext);
}

export default useKitchen;