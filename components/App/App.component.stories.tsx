import App from './App.component'
import React from 'react'
import { WithRedux } from '../../utils/storybook.utils'
import '../../css/map.css'
import '../../css/cart.css'
import '../../css/restaurant.css'
import restaurants from '../../restaurants.json'
import { first } from 'lodash'
import { Restaurant } from '../../types'

export default {
  title: 'App / Component',
}

const nextRestaurants = restaurants as Restaurant[]

export const MapView = () => (
  <WithRedux persist={false}>
    <App />
  </WithRedux>
)

MapView.story = {
  name: 'Map view',
}

export const RestaurantView = () => (
  <WithRedux
    persist={false}
    state={{ selectedRestaurant: first(nextRestaurants) }}
  >
    <App />
  </WithRedux>
)

RestaurantView.story = {
  name: 'Restaurant view',
}
