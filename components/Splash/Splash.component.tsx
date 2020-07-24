import React from 'react'
import { CircularProgress, Typography } from '@material-ui/core'
import App from '../App'
import { selectRestaurantBySlug } from '../../redux/actions/restaurant.actions'
import { getPatternValue, RESTAURANT_PATH } from '../../paths'

export interface SplashProps {
  selectRestaurantBySlug: typeof selectRestaurantBySlug
}

export default function Splash(props: SplashProps) {
  const [ready, setReady] = React.useState(false)

  function makeReady() {
    const slug = getPatternValue(
      location.pathname,
      RESTAURANT_PATH,
      'restaurantName'
    )
    props.selectRestaurantBySlug(slug)
    setTimeout(() => {
      setReady(true)
    })
  }

  if (!ready) {
    setTimeout(makeReady)

    return (
      <div className="splash">
        <CircularProgress size={100} />
        <Typography variant="h4" className="splash-title">
          Loading pizzas...
        </Typography>
      </div>
    )
  }
  return <App />
}
