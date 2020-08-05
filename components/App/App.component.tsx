import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Appbar from '../Appbar'
import Cart from '../Cart'
import CartButton from '../CartButton'
import Map from '../Map'
import MapIcon from '../MapIcon'
import NavIcon from '../NavIcon'
import RestaurantView from '../Restaurant'
import { MAP_PATH, RESTAURANT_PATH } from '../../paths'

export default function App() {
  return (
    <div>
      <Appbar />

      <Switch>
        <Route
          exact
          path={MAP_PATH}
          component={() => (
            <div className="map-container">
              <Map />
            </div>
          )}
        />

        <Route exact path={RESTAURANT_PATH} component={RestaurantView} />
      </Switch>

      <div className="fabs">
        <div>
          <CartButton />
        </div>
        <div>
          <MapIcon />
        </div>
        <div>
          <NavIcon />
        </div>
      </div>

      <Cart />
    </div>
  )
}
