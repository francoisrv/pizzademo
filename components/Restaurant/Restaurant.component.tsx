import React from 'react'
import ReactPlayer from 'react-player'
import { kebabCase, first } from 'lodash'
import Typography from '@material-ui/core/Typography'
import { useMediaQuery } from 'react-responsive'

import { Restaurant } from '../../types'
import Ratings from '../Ratings'
import Menu from '../Menu'
import restaurants from '../../restaurants.json'
import SlideOnScroll from '../SlideOnScroll'
import Appbar from '../Appbar'

export interface RestaurantViewProps {
  restaurant?: Restaurant
}

const RestaurantView: React.FC<RestaurantViewProps> = (props) => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 500px)',
  })

  return (
    <div
      id="restaurant"
      style={{
        height: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
        overflow: 'auto',
      }}
    >
      <SlideOnScroll>
        <div>
          <Appbar />
        </div>
      </SlideOnScroll>
      <div style={{ height: '20vh' }} />
      <header>
        <div>
          <div>
            <Typography variant={isMobile ? 'h4' : 'h2'}>
              {props.restaurant.name}
            </Typography>
            <Ratings
              ratings={props.restaurant.ratings}
              size={isMobile ? 2 : 4.5}
            />
          </div>
        </div>
      </header>

      <div>
        <div>
          <ReactPlayer
            height="100%"
            loop
            playing
            url={`https://storage.cloud.google.com/pizzame/${kebabCase(
              props.restaurant.name
            )}.webm`}
            width="100%"
          />
        </div>
      </div>

      <Menu />
    </div>
  )
}

RestaurantView.defaultProps = {
  restaurant: first(restaurants),
}

export default RestaurantView
