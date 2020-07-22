import React from 'react'
import ReactPlayer from 'react-player'
import { kebabCase } from 'lodash'
import Typography from '@material-ui/core/Typography'
import { useMediaQuery } from 'react-responsive'
import { Restaurant } from '../../types'
import Ratings from '../Ratings'
import MenuView from '../Menu/Menu.component'

interface RestaurantViewProps {
  restaurant?: Restaurant
}

const RestaurantView: React.FC<RestaurantViewProps> = (props) => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 500px)',
  })

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
        overflow: 'auto',
      }}
    >
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

      <MenuView />
    </div>
  )
}

RestaurantView.defaultProps = {
  restaurant: {
    name: 'Napoli Pizza',
    ratings: 0,
  },
}

export default RestaurantView
