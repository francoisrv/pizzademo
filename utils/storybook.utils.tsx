import createStore, {
  Options as CreateStoreOptions,
} from '../redux/createStore'
import { Provider } from 'react-redux'
import React from 'react'
import ReduxState from '../redux/state'
import { PersistGate } from 'redux-persist/integration/react'

export function WithRedux(props: {
  state?: Partial<ReduxState>
  children: React.ReactElement
  persist?: boolean
}) {
  const { store, persistor } = createStore(
    { ...props.state },
    {
      persist: props.persist === false ? false : true,
    }
  )
  return (
    <Provider store={store}>
      {props.persist !== false && (
        <PersistGate loading="Loading" persistor={persistor}>
          {props.children}
        </PersistGate>
      )}
      {props.persist === false && props.children}
    </Provider>
  )
}
