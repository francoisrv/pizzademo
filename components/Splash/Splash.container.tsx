import { connect } from 'react-redux'
import React from 'react'

import Splash from './Splash.component'
import { selectRestaurantBySlug } from '../../redux/actions/restaurant.actions'
import App from '../App'
import ReduxState from '../../redux/state'
import { loadApp } from '../../redux/actions/app.actions'

export default connect((state: ReduxState) => ({ loaded: state.loaded }), {
  selectRestaurantBySlug,
  loadApp,
})(function SplashContainer(props: {
  loaded: ReduxState['loaded']
  selectRestaurantBySlug: typeof selectRestaurantBySlug
  loadApp: typeof loadApp
}) {
  if (!props.loaded) {
    setTimeout(props.loadApp)
    return <Splash />
  }
  return <App />
})
