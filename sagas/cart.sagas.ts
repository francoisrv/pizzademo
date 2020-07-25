import { takeLatest, put } from 'redux-saga/effects'
import { ReduxActionType } from '../redux/types'
import { checkOut, clearCart, closeCart } from '../redux/actions/cart.actions'

function* checkOutSaga(action: ReturnType<typeof checkOut>) {
  yield put(clearCart())
  yield put(closeCart())
}

export default function* cartSagas() {
  yield takeLatest(ReduxActionType.CHECKOUT, checkOutSaga)
}
