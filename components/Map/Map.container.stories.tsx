import { WithRedux } from '../../utils/storybook.utils'
import Map from '.'
import React from 'react'
import '../../css/main.css'

export default {
  title: 'Map / Container',
}

export const WithRestaurants = () => (
  <WithRedux persist={false}>
    <div style={{ width: '100vw', height: '100vh' }}>
      <Map />
    </div>
  </WithRedux>
)

WithRestaurants.story = { name: 'With restaurants' }
