import api from "../services/api"

import { useHomeStore } from "./home-store"

const { setState } = useHomeStore;
export const getAllProducts = async () => {
    setState({
        loading: true,
    })
    try{
        const {data: result} = await api.getAllProducts();
        if(result.length){
            return setState({
                products: result,
                loading: false
            })
        }

    }catch(e){
        return setState({
            products: [],
            loading: false,
            error: e.messages
        })
    }
}


