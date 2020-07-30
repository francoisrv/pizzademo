import React from 'react'
import '../../css/map.css'
import Marker from './Marker.component'
import restaurants from '../../restaurants.json'
import { first } from 'lodash'
import Map from '../Map/Map.component'
import config from '../../config'
import { Restaurant } from '../../types'

export default {
  title: 'Marker',
  component: Marker,
}

const nextRestaurants = restaurants as Restaurant[]

export const MarkerSimple = () => (
  <div style={{ width: '80vw', height: '80vh' }}>
    <Map latitude={config.latitude} longitude={config.longitude}>
      <Marker
        restaurant={first(nextRestaurants)}
        onClose={() => {}}
        selectRestaurant={() => {}}
      />
    </Map>
  </div>
)

MarkerSimple.story = {
  name: 'Regular',
}
