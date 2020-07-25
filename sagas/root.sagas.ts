import { all } from 'redux-saga/effects'

import restaurantsSagas from './restaurants.sagas'
import routerSagas from './router.sagas'
import cartSagas from './cart.sagas'

export default function* rootSaga() {
  yield all([restaurantsSagas(), routerSagas(), cartSagas()])
}
