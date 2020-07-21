import React from 'react'
import { linkTo } from '@storybook/addon-links'
import Map from './Map.component'

export default {
  title: 'Map',
  component: Map,
}

export const BareMap = () => (
  <div style={{ width: '80vw', height: '80vh' }}>
    <Map latitude={51.5144951} longitude={-0.0824952} />
  </div>
)

BareMap.story = {
  name: 'Bare Map',
}
