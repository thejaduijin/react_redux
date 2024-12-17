import { ADD_TO_CART } from "../Constant"

export const addToCart = (data: any) => {
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removeToCart = (data: any) => {
    return {
        type: 'REMOVE_TO_CART',
        data: data
    }
}
