

import * as React from 'react';
import { useEffect } from 'react';
import { getAllProducts } from '../../stores/home-actions';
import { useAllProducts, useLoading } from '../../stores/home-store';
import Home from '../../components/home'


const HomeContainer = () => {
    const products  = useAllProducts();
    const loading = useLoading();

    useEffect(() => {
        getAllProducts();
    },[])

    if(loading){
        return 'loading....'
    }

    return <Home products={products} />
}

export default HomeContainer;
