import React from 'react'
import classNames from 'classnames'
import CartButton from '../CartButton'
import Map from '../Map'
import Cart from '../Cart'
import RestaurantView from '../Restaurant'
import NavIcon from '../NavIcon'

export interface AppProps {
  showRestaurant: boolean
}

export default function App(props: AppProps) {
  const { showRestaurant } = props

  return (
    <div>
      <div
        className={classNames(
          'map-container',
          showRestaurant && 'map-container-restaurant'
        )}
      >
        <Map />
      </div>

      {showRestaurant && <RestaurantView />}

      <CartButton />

      <NavIcon />

      <Cart />
    </div>
  )
}
