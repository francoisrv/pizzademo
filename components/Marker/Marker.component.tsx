import React from 'react'
import { kebabCase } from 'lodash'
import { Popup } from 'react-map-gl'
import Typography from '@material-ui/core/Typography'
import ReactPlayer from 'react-player'

import { Restaurant } from '../../types'
import Ratings from '../Ratings'

export interface PizzaMarkerProps {
  pizzeria: Restaurant
  selectPizzeria: (pizzeria: Restaurant) => any
  onClose: () => any
}

const PizzaMarker: React.FC<PizzaMarkerProps> = (props) => {
  if (!props.pizzeria) {
    return <div />
  }

  function goToRestaurant() {
    props.selectPizzeria(props.pizzeria)
  }

  return (
    <Popup
      latitude={props.pizzeria.latitude}
      longitude={props.pizzeria.longitude}
      onClose={props.onClose}
      closeOnClick={false}
    >
      <div onClick={goToRestaurant}>
        <Typography>{props.pizzeria.name}</Typography>
        <div>
          <Ratings ratings={props.pizzeria.ratings} />
        </div>
        <ReactPlayer
          url={`https://storage.cloud.google.com/pizzame/${kebabCase(
            props.pizzeria.name
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
