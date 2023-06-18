import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { setSelectedCafe } from '../stores/cafe-actions'
import { useAllCafes, useSelectedCafe } from '../stores/cafe-store'
import CafeInfo from '../components/cafe-info'
const CafesContainer = () => {
    const data = useAllCafes();
    const selectedCafe = useSelectedCafe()
    const params = useParams()
    useEffect(() => {
        if (params.id) {
            setSelectedCafe(data.find((item) => item.id === Number(params.id)))
        }
    }, [data, params.id])

    return <CafeInfo selectedCafe={selectedCafe} />
}

export default (CafesContainer);