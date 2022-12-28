import { combineReducers } from "redux";
import { productReducer,SelectedReducer } from "./productReducer";

const rootReducer=combineReducers({
    allproducts:productReducer,
    product:SelectedReducer
})
export default rootReducer