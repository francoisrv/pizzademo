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

export default function createStore() {
  const rootReducer = combineReducers(reducers)
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store: Store<ReduxState, any> = createReduxStore(
    persistedReducer,
    {},
    compose(applyMiddleware(...middlewares))
  )

  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return { persistor, store }
}
