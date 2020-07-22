import React from 'react'
import '../../css/map.css'
import CartButton from './CartButton.component'

export default {
  title: 'Cart / Cart Button / Component',
  component: CartButton,
}

export const CartButtonSimple = () => (
  <div style={{}}>
    <CartButton />
  </div>
)

CartButtonSimple.story = {
  name: 'Regular',
}
