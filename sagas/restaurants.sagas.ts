import { find, kebabCase, startCase } from 'lodash'
import { takeLatest, put, select } from 'redux-saga/effects'

import { RESTAURANT_PATH, MAP_PATH } from '../paths'
import {
  selectRestaurant,
  selectRestaurantBySlug,
  resetSelectRestaurant,
} from '../redux/actions/restaurant.actions'
import { goToAction } from '../redux/actions/router.actions'
import { ReduxActionType } from '../redux/types'

function* selectRestaurantSaga(action: ReturnType<typeof selectRestaurant>) {
  yield put(
    goToAction(RESTAURANT_PATH, {
      params: { restaurantName: kebabCase(action.payload.restaurant.name) },
    })
  )
}

function* resetSelectRestaurantSaga(
  action: ReturnType<typeof resetSelectRestaurant>
) {
  yield put(goToAction(MAP_PATH))
}

function* selectRestaurantBySlugSaga(
  action: ReturnType<typeof selectRestaurantBySlug>
) {
  const { slug } = action.payload
  const name = startCase(slug)
  const restaurants = yield select((state) => state.restaurants)
  const restaurant = find(restaurants, { name })
  if (restaurant) {
    yield put(selectRestaurant(restaurant))
  }
}

export default function* restaurantsSagas() {
  yield takeLatest(ReduxActionType.SELECT_RESTAURANT, selectRestaurantSaga)
  yield takeLatest(
    ReduxActionType.SELECT_RESTAURANT_BY_SLUG,
    selectRestaurantBySlugSaga
  )
  yield takeLatest(
    ReduxActionType.RESET_SELECT_RESTAURANT,
    resetSelectRestaurantSaga
  )
}
