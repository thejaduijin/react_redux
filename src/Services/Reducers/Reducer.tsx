import { ADD_TO_CART } from "../Constant"
const initialState = {
    cartItem: []
}

export default function cartItems(initialState: any, action: any) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...initialState,
                cartData: action.data
            }
            break;
        default: initialState
    }

}