import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CartButton from '../CartButton'
import Map from '../Map'
import Cart from '../Cart'
import RestaurantView from '../Restaurant'
import Nav from '../Nav'
import { MAP_PATH, RESTAURANT_PATH } from '../../paths'
import MapIcon from '../MapIcon'
import Appbar from '../Appbar'

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
          <Nav />
        </div>
      </div>

      <Cart />
    </div>
  )
}
