import React from 'react'
import Map from './Map'
import classNames from 'classnames'
import Appbar from './Appbar'
import Restaurant from './Restaurant.component'
import { useLax, useLaxElement } from 'use-lax'
import CartButton from './CartButton.component'
import CssBaseline from '@material-ui/core/CssBaseline'
import ShowOnScroll from './ShowOnScroll'
import RestaurantWrapper from './RestaurantWrapper'

export default function Test() {
  const [showRestaurant, setShowRestaurant] = React.useState(true)

  return (
    <div>
      <div
        className={classNames(
          'map-container',
          showRestaurant && 'map-container-restaurant'
        )}
      >
        <Map latitude={51.5144951} longitude={-0.0824952} />
      </div>

      {showRestaurant && <RestaurantWrapper />}

      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 40,
          backgroundColor: 'black',
          position: 'fixed',
          top: 70,
          left: 50,
          zIndex: 999999,
        }}
        onClick={() => setShowRestaurant(!showRestaurant)}
      />

      <CartButton />
    </div>
  )
}
