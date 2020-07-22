import Restaurant from './Restaurant.component'
import restaurants from '../../restaurants.json'
import React from 'react'
import { WithRedux } from '../../utils/storybook.utils'
import { first } from 'lodash'

export default {
  title: 'Restaurant',
  component: Restaurant,
}

export const Example = () => (
  <WithRedux persist={false} state={{ selectedRestaurant: first(restaurants) }}>
    <Restaurant restaurant={first(restaurants)} />
  </WithRedux>
)

Example.story = {
  name: 'Example',
}
