import Restaurant from './Restaurant.component'
import restaurants from '../../restaurants.json'
import React from 'react'
import { WithRedux } from '../../utils/storybook.utils'
import { first } from 'lodash'
import { Restaurant as RestaurantInterface } from '../../types'

export default {
  title: 'Restaurant',
  component: Restaurant,
}

const nextRestaurants = restaurants as RestaurantInterface[]

export const Example = () => (
  <WithRedux
    persist={false}
    state={{ selectedRestaurant: first(nextRestaurants) }}
  >
    <Restaurant restaurant={first(nextRestaurants)} />
  </WithRedux>
)

Example.story = {
  name: 'Example',
}
