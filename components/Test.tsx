import React from 'react'
import Map from './Map'
import classNames from 'classnames'
import Appbar from './Appbar'
import Restaurant from './Restaurant.component'
import { useLax, useLaxElement } from 'use-lax'
import CartButton from './CartButton.component'

export default function Test() {
  const [showRestaurant, setShowRestaurant] = React.useState(true)

  useLax()

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

      {showRestaurant && (
        <div className="restaurant-wrapper">
          <Restaurant />
        </div>
      )}

      <div
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'black',
          position: 'fixed',
          top: 50,
          right: 50,
          zIndex: 999999,
        }}
        onClick={() => setShowRestaurant(!showRestaurant)}
      />

      <CartButton />
    </div>
  )
}
