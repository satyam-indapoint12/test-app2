import api from "../services/api"

import { useCafeStore } from "./cafe-store"
import { groupBy,map } from 'lodash'

const { setState, getState } = useCafeStore;
export const getAllCafesTiming = async () => {
    setState({
        loading: true,
    })
    try{
        const {data: result} = await api.getAllCafesTiming()
        if(result.length){
            return setState({
                cafesTiming: result,
                loading: false
            })
        }

    }catch(e){
        return setState({
            cafes: [],
            loading: false,
            error: e.messages
        })
    }
}


const updateResultData = (result) => {
    const { cafesTiming } = getState();
    const groupedTimings = groupBy(cafesTiming, 'CafeId');
    const mergedData = map(result, (cafe) => {
        return {
            ...cafe,
            timing: groupedTimings[cafe.id] || []
        };
    });
    return mergedData

}
export const getAllCafes = async () => {
    setState({
        loading: true,
    })
    try{
        const {data: result} = await api.getAllCafes()
        if(result.length){
            await getAllCafesTiming();
            const updatedData = updateResultData(result)
            return setState({
                cafes: updatedData,
                loading: false
            })
        }

    }catch(e){
        return setState({
            cafes: [],
            loading: false,
            error: e.messages
        })
    }
}

export const setSelectedCafe = (selectedCafe) => {
    setState({
        selectedCafe
    })
}

