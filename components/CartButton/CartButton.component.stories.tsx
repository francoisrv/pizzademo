import React from 'react'
import '../../css/map.css'
import CartButton from './CartButton.component'
import { openCart, closeCart } from '../../redux/actions/cart.actions'

export default {
  title: 'Cart Button / Component',
  component: CartButton,
}

export const CartButtonSimple = () => (
  <CartButton openCart={openCart} closeCart={closeCart} cartOpen items={4} />
)

CartButtonSimple.story = {
  name: 'With items',
}

export const EmptyCart = () => (
  <CartButton openCart={openCart} closeCart={closeCart} cartOpen items={0} />
)

EmptyCart.story = {
  name: 'With empty cart',
}
