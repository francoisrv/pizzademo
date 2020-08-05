import React from 'react'
import Chip from '@material-ui/core/Chip'
import Fab from '@material-ui/core/Fab'
import { filter } from 'lodash'

import './Quantity.css'

import { Pizza, PizzaCart } from '../../types'
import { addToCart, removeFromCart } from '../../redux/actions/cart.actions'

export interface QuantityProps {
  pizza: Pizza
  cart: PizzaCart[]
  addToCart: typeof addToCart
  removeFromCart: typeof removeFromCart
}

export default function Quantity(props: QuantityProps) {
  const { cart, pizza } = props
  const quantity = filter(cart, { name: pizza.name }).length

  if (quantity === 0) {
    return <div />
  }

  return (
    <div>
      <Chip label="-" onClick={() => props.removeFromCart(pizza)} />
      <span className="quantity-chip">
        <Fab size="small" color="primary">
          {quantity}
        </Fab>
      </span>
      <Chip label="+" onClick={() => props.addToCart(pizza)} />
    </div>
  )
}
