import React from 'react'
import '../../css/map.css'
import Marker from './Marker.component'
import pizzerias from '../../restaurants.json'
import { first } from 'lodash'
import Map from '../Map/Map.component'
import config from '../../config'

export default {
  title: 'Restaurant / Marker',
  component: Marker,
}

export const MarkerSimple = () => (
  <div style={{}}>
    <Map latitude={config.latitude} longitude={config.longitude} />
    <Marker
      pizzeria={first(pizzerias)}
      onClose={() => {}}
      selectPizzeria={() => {}}
    />
  </div>
)

MarkerSimple.story = {
  name: 'Regular',
}
