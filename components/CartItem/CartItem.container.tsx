import React from 'react'

import CartItem from './CartItem.component'
import { PizzaCart } from '../../types'
import { addToCart, removeFromCart } from '../../redux/actions/cart.actions'
import { connect } from 'react-redux'

interface CartItemOwnProps {
  pizza: PizzaCart
}

interface CartItemActions {
  addToCartAction: typeof addToCart
  removeFromCartAction: typeof removeFromCart
}

export type CartItemProps = CartItemOwnProps & CartItemActions

const actions: CartItemActions = {
  addToCartAction: addToCart,
  removeFromCartAction: removeFromCart,
}

const withStore = connect(null, actions)

function CartItemContainer(props: CartItemProps) {
  const { pizza, addToCartAction, removeFromCartAction } = props

  return (
    <CartItem
      pizza={pizza}
      add={addToCartAction}
      remove={removeFromCartAction}
    />
  )
}

export default withStore(CartItemContainer)
