import React from 'react'
import Appbar from './Appbar.component'
import '../../css/map.css'
import { openCart } from '../../redux/actions/cart.actions'
import restaurants from '../../restaurants.json'
import { first } from 'lodash'

export default {
  title: 'Layout / Appbar / Component',
  component: Appbar,
}

export const CloseAppbar = () => (
  <div style={{}}>
    <Appbar
      isCartModalOpen={false}
      cartSize={10}
      open={openCart}
      restaurant={first(restaurants)}
    />
  </div>
)

CloseAppbar.story = {
  name: 'Closed Appbar',
}

export const OpenAppbar = () => (
  <div style={{}}>
    <Appbar
      isCartModalOpen
      cartSize={10}
      open={openCart}
      restaurant={first(restaurants)}
    />
  </div>
)

OpenAppbar.story = {
  name: 'Open Appbar',
}

export const AppbarWithEmptyCart = () => (
  <div style={{}}>
    <Appbar
      isCartModalOpen
      cartSize={0}
      open={openCart}
      restaurant={first(restaurants)}
    />
  </div>
)

AppbarWithEmptyCart.story = {
  name: 'With empty cart',
}
