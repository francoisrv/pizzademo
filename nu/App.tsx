import React from 'react'
import { pick } from 'lodash'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Route, Switch } from 'react-router-dom'
import { useLax } from 'use-lax'

import Appbar from './Appbar'
import ReduxState from '../redux/state'
import { selectRestaurantBySlug } from '../redux/actions/restaurant.actions'
import PizzaView from './PizzaView'
import RestaurantView from './Restaurant'
import { urlMatchesPattern, RESTAURANT_PATH, getPatternValue } from '../paths'
import Cart from './Cart'
import Pizzeria from './Pizzeria'

type AppStore = Pick<ReduxState, 'selectedRestaurant'>

interface AppActions {
  selectRestaurantBySlugAction: typeof selectRestaurantBySlug
}

type AppProps = AppActions & AppStore

const connector = (state: ReduxState): AppStore =>
  pick(state, ['selectedRestaurant'])

const actions: AppActions = {
  selectRestaurantBySlugAction: selectRestaurantBySlug,
}

const withStore = connect(connector, actions)

function AppView(props: AppProps) {
  React.useEffect(() => {
    if (urlMatchesPattern(location.pathname, RESTAURANT_PATH)) {
      const slug = getPatternValue(
        location.pathname,
        RESTAURANT_PATH,
        'restaurantName'
      )
      props.selectRestaurantBySlugAction(slug)
    }
  }, [props])

  return (
    <div>
      <Appbar />
      <div
        id="container"
        className={classNames(
          Boolean(props.selectedRestaurant) && 'restaurant'
        )}
      >
        <PizzaView />
        <div className="page">
          <Switch>
            {props.selectedRestaurant && (
              <Route
                path="/restaurants/:restaurantName"
                exact
                component={Pizzeria}
              />
            )}
          </Switch>
        </div>
      </div>
      <Cart />
    </div>
  )
}

const App = withStore(AppView)

export default App
