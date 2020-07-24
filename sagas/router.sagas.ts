import { takeLatest, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { goToAction } from '../redux/actions/router.actions'
import { ReduxActionType } from '../redux/types'
import { MAP_PATH } from '../paths'
import { resetSelectRestaurant } from '../redux/actions/restaurant.actions'

function* goToSaga(action: ReturnType<typeof goToAction>) {
  yield put(push(action.payload.link))
}

function* changeLocationSaga(action: any) {
  if (action.payload.pathname === MAP_PATH) {
    yield put(resetSelectRestaurant())
  }
}

export default function* routerSagas() {
  yield takeLatest(ReduxActionType.GO_TO, goToSaga)
  yield takeLatest('@router/LOCATION_CHANGE', changeLocationSaga)
}
