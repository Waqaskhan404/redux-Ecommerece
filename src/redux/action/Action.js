import { ActionTypes } from "../constants/action-types"
export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectProduct=(product)=>{
    return{
        type:ActionTypes.SET_SELECTED_PRODUCT,
        payload:product
    }
}

export const removeProduct=()=>{
    return{
        type:ActionTypes.SET_REMOVE_PRODUCT,
    }
}