import React from 'react'
import Fab from '@material-ui/core/Fab'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

export default function CartButton() {
  return (
    <div className="cart-button-container">
      <Fab color="primary" size="large">
        <ShoppingCartIcon className="cart-button-icon" />
      </Fab>
    </div>
  )
}
