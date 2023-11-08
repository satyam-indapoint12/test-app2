import create from 'zustand';


export const INTIAL_STATE = {
    products: [],
    loading: false,
    error: null
}

export const useHomeStore = create(() => ({
    ...INTIAL_STATE
}))

export const useAllProducts = () => {
    return useHomeStore((s) => s.products)
}
export const useLoading = () => {
    return useHomeStore((s) => s.loading)
}
export const useError = () => {
    return useHomeStore((s) => s.error)
}

