import React, { useEffect } from 'react'
import Cafes from '../components/cafes'
import { getAllCafes } from '../stores/cafe-actions'
import { useAllCafes, useError, useLoading } from '../stores/cafe-store'

const CafesContainer = () => {
    console.log('testssss')
    const loading = useLoading();
    const error  = useError();
    const data = useAllCafes();
    useEffect(() => {
        getAllCafes()
    },[])

    if(loading){
        return <span>Loading....</span>
    }
    if(error){
        return <span>{error}</span>
    }
    return <Cafes data={data} />
}

export default (CafesContainer);