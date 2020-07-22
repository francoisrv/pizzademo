import App from './App.component'
import React from 'react'
import { WithRedux } from '../../utils/storybook.utils'
import '../../css/map.css'
import '../../css/cart.css'
import restaurants from '../../restaurants.json'
import { first } from 'lodash'

export default {
  title: 'Layout / App / Component',
}

export const MapView = () => (
  <WithRedux persist={false}>
    <App showRestaurant={false} />
  </WithRedux>
)

MapView.story = {
  name: 'Map view',
}

export const RestaurantView = () => (
  <WithRedux persist={false} state={{ selectedRestaurant: first(restaurants) }}>
    <App showRestaurant />
  </WithRedux>
)

RestaurantView.story = {
  name: 'Restaurant view',
}
