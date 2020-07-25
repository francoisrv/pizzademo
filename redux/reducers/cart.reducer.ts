import ReduxState from '../state'
import { addToCart, removeFromCart, clearCart } from '../actions/cart.actions'
import { ReduxActionType } from '../types'

type State = ReduxState['cart']

type Actions =
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>
  | ReturnType<typeof clearCart>

const initialState: State = []

export default function cartReducer(
  state: State = initialState,
  action: Actions
) {
  if (action.type === ReduxActionType.ADD_TO_CART) {
    return [...state, action.payload.pizza]
  }
  if (action.type === ReduxActionType.REMOVE_FROM_CART) {
    let found = false
    return state.filter((pizza) => {
      if (found) {
        return true
      }
      if (pizza.name === action.payload.pizza.name) {
        found = true
        return false
      }
      return true
    })
  }
  if (action.type === ReduxActionType.CLEAR_CART) {
    return initialState
  }
  return state
}
