import { takeLatest, call, put } from 'redux-saga/effects'
import { ReduxActionType } from '../redux/types'
import { db } from '../firebase'
import { Restaurant } from '../types'
import {
  loadRestaurants,
  selectRestaurantBySlug,
} from '../redux/actions/restaurant.actions'
import { getPatternValue, RESTAURANT_PATH } from '../paths'
import { appIsLoaded } from '../redux/actions/app.actions'

function* loadAppSaga() {
  const collection = db.collection('restaurants')
  const cursor = yield call(collection.get.bind(collection))
  const restaurants: Restaurant[] = []
  cursor.forEach((doc) => {
    restaurants.push({
      id: doc.id,
      ...doc.data(),
    })
  })
  yield put(loadRestaurants(restaurants))
  const slug = getPatternValue(
    location.pathname,
    RESTAURANT_PATH,
    'restaurantName'
  )
  yield put(selectRestaurantBySlug(slug))
  yield put(appIsLoaded())
}

export default function* appSagas() {
  yield takeLatest(ReduxActionType.LOAD_APP, loadAppSaga)
}
