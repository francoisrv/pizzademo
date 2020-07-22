import { withReduxDecorator, WithRedux } from '../../utils/storybook.utils'
import restaurants from '../../restaurants.json'
import { first } from 'lodash'
import Appbar from '.'
import React from 'react'
import { addToCart } from '../../redux/actions/cart.actions'
import pizzas from '../../menu.json'
import { Store } from 'redux'
import createStore from '../../redux/createStore'

export default {
  title: 'Layout / Appbar / Container',
  component: Appbar,
}

const restaurant = first(restaurants)

export const EmptyCart = () => (
  <WithRedux state={{ selectedRestaurant: restaurant }}>
    <Appbar />
  </WithRedux>
)

EmptyCart.story = {
  name: 'With empty cart',
}

export const NotEmptyCart = () => (
  <WithRedux state={{ selectedRestaurant: restaurant, cart: [pizzas[0]] }}>
    <Appbar />
  </WithRedux>
)

NotEmptyCart.story = {
  name: 'With not empty cart',
}
