import React from 'react'
import Appbar from './Appbar.component'
import '../../css/map.css'
import { openCart } from '../../redux/actions/cart.actions'
import restaurants from '../../restaurants.json'
import { first } from 'lodash'
import { Restaurant } from '../../types'
import { resetSelectRestaurant } from '../../redux/actions/restaurant.actions'

export default {
  title: 'Appbar / Component',
  component: Appbar,
}

const nextRestaurants = restaurants as Restaurant[]

export const CloseAppbar = () => (
  <div style={{}}>
    <Appbar
      isCartModalOpen={false}
      cartSize={10}
      open={openCart}
      restaurant={first(nextRestaurants)}
      goBack={resetSelectRestaurant}
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
      restaurant={first(nextRestaurants)}
      goBack={resetSelectRestaurant}
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
      restaurant={first(nextRestaurants)}
      goBack={resetSelectRestaurant}
    />
  </div>
)

AppbarWithEmptyCart.story = {
  name: 'With empty cart',
}
