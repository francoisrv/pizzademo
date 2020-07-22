import React from 'react'
import { kebabCase } from 'lodash'
import { Popup } from 'react-map-gl'
import Typography from '@material-ui/core/Typography'
import ReactPlayer from 'react-player'

import { Restaurant } from '../../types'
import Ratings from '../Ratings'

export interface PizzaMarkerProps {
  restaurant: Restaurant
  selectrestaurant: (restaurant: Restaurant) => any
  onClose: () => any
}

const PizzaMarker: React.FC<PizzaMarkerProps> = (props) => {
  if (!props.restaurant) {
    return <div />
  }

  function goToRestaurant() {
    props.selectrestaurant(props.restaurant)
  }

  return (
    <Popup
      latitude={props.restaurant.latitude}
      longitude={props.restaurant.longitude}
      onClose={props.onClose}
      closeOnClick={false}
    >
      <div onClick={goToRestaurant}>
        <Typography>{props.restaurant.name}</Typography>
        <div>
          <Ratings ratings={props.restaurant.ratings} />
        </div>
        <ReactPlayer
          url={`https://storage.cloud.google.com/pizzame/${kebabCase(
            props.restaurant.name
          )}.webm`}
          loop
          width={180}
          height={100}
          playing
        />
      </div>
    </Popup>
  )
}

export default PizzaMarker
