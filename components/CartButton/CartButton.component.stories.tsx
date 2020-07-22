import React from 'react'
import '../../css/map.css'
import CartButton from './CartButton.component'
import { openCart, closeCart } from '../../redux/actions/cart.actions'

export default {
  title: 'Cart / Cart Button / Component',
  component: CartButton,
}

export const CartButtonSimple = () => (
  <div style={{}}>
    <CartButton openCart={openCart} closeCart={closeCart} cartOpen />
  </div>
)

CartButtonSimple.story = {
  name: 'Regular',
}
