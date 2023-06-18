import create from 'zustand';


export const INTIAL_STATE = {
    cafes: [],
    loading: false,
    error: null,
    cafesTiming: [],
    selectedCafe: {}
}

export const useCafeStore = create(() => ({
    ...INTIAL_STATE
}))

export const useAllCafes = () => {
    return useCafeStore((s) => s.cafes)
}
export const useLoading = () => {
    return useCafeStore((s) => s.loading)
}
export const useError = () => {
    return useCafeStore((s) => s.error)
}

export const useSelectedCafe = () => {
    return useCafeStore((s) => s.selectedCafe)
}