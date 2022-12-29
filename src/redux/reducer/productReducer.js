import { ActionTypes } from "../constants/action-types"

const initialState={
    products:[]
}
export const productReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS :
            return {...state,products:payload}
        default:
            return state
    }

}

export const SelectedReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_SELECTED_PRODUCT :
            return {...state,...payload}
        case ActionTypes.SET_REMOVE_PRODUCT :
                return {} 
        default:
            return state
    }

}


