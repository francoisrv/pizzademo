import React from 'react'
import { connect } from 'react-redux'
import Map from './Map.component'
import { Marker } from 'react-map-gl'
import { pick } from 'lodash'

import RestaurantMarker from '../Marker'
import { previewRestaurant } from '../../redux/actions/restaurant.actions'
import ReduxState from '../../redux/state'

type MapStoreProps = Pick<ReduxState, 'restaurants'> &
  Pick<ReduxState, 'coords'>

interface MapActions {
  previewRestaurantAction: typeof previewRestaurant
}

type MapProps = MapStoreProps & MapActions

export default connect(
  (state: ReduxState) => pick(state, ['restaurants', 'coords']),
  {
    previewRestaurantAction: previewRestaurant,
  }
)(function MapContainer(props: MapProps) {
  return (
    <Map latitude={props.coords[0]} longitude={props.coords[1]}>
      {props.restaurants.map((restaurant) => (
        <Marker
          key={restaurant.name}
          latitude={restaurant.latitude}
          longitude={restaurant.longitude}
        >
          <img
            className="rotate"
            src="https://storage.cloud.google.com/pizzame/pizza.png"
            onClick={() => props.previewRestaurantAction(restaurant)}
            alt={restaurant.name}
            style={
              {
                // marginTop: -20
              }
            }
          />
        </Marker>
      ))}
      <RestaurantMarker />
    </Map>
  )
})
