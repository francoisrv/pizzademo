import React from 'react'
import { first } from 'lodash'

import Appbar from '.'
import pizzas from '../../menu.json'
import restaurants from '../../restaurants.json'
import { WithRedux } from '../../utils/storybook.utils'
import Cart from '../Cart'

export default {
  title: 'Appbar / Container',
  component: Appbar,
}

const restaurant = first(restaurants)

export const EmptyCart = () => (
  <WithRedux state={{ selectedRestaurant: restaurant }} persist={false}>
    <Appbar />
  </WithRedux>
)

EmptyCart.story = {
  name: 'With empty cart',
}

export const NotEmptyCart = () => (
  <WithRedux
    state={{ selectedRestaurant: restaurant, cart: [pizzas[0]] }}
    persist={false}
  >
    <Appbar />
  </WithRedux>
)

NotEmptyCart.story = {
  name: 'With n items in cart',
}

export const WithCartModal = () => (
  <WithRedux
    state={{ selectedRestaurant: restaurant, cart: [pizzas[0]] }}
    persist={false}
  >
    <div>
      <Appbar />
      <Cart />
    </div>
  </WithRedux>
)

WithCartModal.story = {
  name: 'With cart modal',
}
