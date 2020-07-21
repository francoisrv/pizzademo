import React from 'react'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'
import { kebabCase, pick } from 'lodash'
import Typography from '@material-ui/core/Typography'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { useMediaQuery } from 'react-responsive'
import { useLaxElement } from 'use-lax'

import { goToAction } from '../redux/actions/router.actions'
import { resetSelectRestaurant } from '../redux/actions/restaurant.actions'
import ReduxState from '../redux/state'
import MenuView from './Menu'
import Ratings from './Ratings'

type RestaurantStore = Pick<ReduxState, 'selectedRestaurant'>

interface RestaurantActions {
  goToAction: typeof goToAction
  resetSelectRestaurantAction: typeof resetSelectRestaurant
}

const connector = (state: ReduxState): RestaurantStore =>
  pick(state, ['selectedRestaurant'])

const actions: RestaurantActions = {
  goToAction,
  resetSelectRestaurantAction: resetSelectRestaurant,
}

const withStore = connect(connector, actions)

type RestaurantViewProps = RestaurantActions & RestaurantStore

const RestaurantView: React.FC<RestaurantViewProps> = (props) => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 500px)',
  })

  return (
    <div className="restaurant-view">
      <header className="restaurant-header-style">
        <div className="restaurant-inner-header-style">
          <ArrowBackIosIcon
            className="back-arrow-style"
            onClick={() => {
              props.goToAction('/')
              props.resetSelectRestaurantAction()
            }}
          />
          <div>
            <Typography className="header1-style">
              {props.selectedRestaurant.name}
            </Typography>
            <Ratings
              ratings={props.selectedRestaurant.ratings}
              size={isMobile ? 2 : 4.5}
            />
          </div>
        </div>
      </header>

      <div className="video-parallax-container">
        <div className="video-parallax-wrapper">
          <ReactPlayer
            height="100%"
            loop
            playing
            url={`https://storage.cloud.google.com/pizzame/${kebabCase(
              props.selectedRestaurant.name
            )}.webm`}
            width="100%"
          />
        </div>
      </div>

      <MenuView />
    </div>
  )
}

export default withStore(RestaurantView)
