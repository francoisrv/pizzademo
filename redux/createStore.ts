import {
  createStore as createReduxStore,
  combineReducers,
  applyMiddleware,
  compose,
  Store,
} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import * as reducers from './reducers'
import config from '../config'
import ReduxState from './state'
import middlewares from './middlewares'
import sagaMiddleware from '../sagas/middleware'
import rootSaga from '../sagas/root.sagas'

const persistConfig = {
  key: config.storageKey,
  storage,
  whitelist: config.whitelist,
}

export interface Options {
  persist?: boolean
}

export default function createStore(
  initialStore: Partial<ReduxState> = {},
  options: Options = {}
) {
  const rootReducer = combineReducers(reducers)
  const persistedReducer =
    options.persist === false
      ? rootReducer
      : persistReducer(persistConfig, rootReducer)

  const store: Store<ReduxState, any> = createReduxStore(
    persistedReducer,
    initialStore,
    compose(applyMiddleware(...middlewares))
  )

  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return { persistor, store }
}
