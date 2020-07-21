import { Pizza } from '../../types'
import { ReduxActionType } from '../types'

export function addToCart(pizza: Pizza) {
  return {
    type: ReduxActionType.ADD_TO_CART as ReduxActionType.ADD_TO_CART,
    payload: { pizza }
  }
}

export function removeFromCart(pizza: Pizza) {
  return {
    type: ReduxActionType.REMOVE_FROM_CART as ReduxActionType.REMOVE_FROM_CART,
    payload: { pizza }
  }
}

export function openCart() {
  return {
    type: ReduxActionType.OPEN_CART as ReduxActionType.OPEN_CART
  }
}

export function closeCart() {
  return {
    type: ReduxActionType.CLOSE_CART as ReduxActionType.CLOSE_CART
  }
}
