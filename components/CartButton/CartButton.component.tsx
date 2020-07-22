import React from 'react'
import Fab from '@material-ui/core/Fab'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { openCart, closeCart } from '../../redux/actions/cart.actions'

export interface CartButtonProps {
  openCart: typeof openCart
  closeCart: typeof closeCart
  cartOpen: boolean
}

export default function CartButton(props: CartButtonProps) {
  const { cartOpen, openCart, closeCart } = props

  function onClick() {
    if (!cartOpen) {
      openCart()
    } else {
      closeCart()
    }
  }

  return (
    <div className="cart-button-container">
      <Fab color="primary" size="large" onClick={onClick}>
        <ShoppingCartIcon className="cart-button-icon" />
      </Fab>
    </div>
  )
}
