import React from 'react'
import Fab from '@material-ui/core/Fab'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'

import { openCart, closeCart } from '../../redux/actions/cart.actions'

export interface CartButtonProps {
  openCart: typeof openCart
  closeCart: typeof closeCart
  cartOpen: boolean
  items: number
}

export default function CartButton(props: CartButtonProps) {
  const { cartOpen, openCart, closeCart, items } = props

  if (items === 0) {
    return <div />
  }

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
        <Badge badgeContent={items} color="secondary">
          <ShoppingCartIcon className="cart-button-icon" />
        </Badge>
      </Fab>
    </div>
  )
}
