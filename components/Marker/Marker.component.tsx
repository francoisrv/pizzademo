import React from 'react'
import { kebabCase } from 'lodash'
import { Popup } from 'react-map-gl'
import Typography from '@material-ui/core/Typography'
import ReactPlayer from 'react-player'

import { Restaurant } from '../../types'
import Ratings from '../Ratings'

export interface MarkerProps {
  restaurant: Restaurant
  selectRestaurant: (restaurant: Restaurant) => any
  onClose: () => any
}

const Marker: React.FC<MarkerProps> = (props) => {
  if (!props.restaurant) {
    return <div />
  }

  function goToRestaurant() {
    props.selectRestaurant(props.restaurant)
  }

  return (
    <Popup
      latitude={props.restaurant.coords.oa}
      longitude={props.restaurant.coords.ha}
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

export default Marker
