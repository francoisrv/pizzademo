import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'

import createStore from './redux/createStore'
import config from './config'

const { store, persistor } = createStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={config.history}>
      <PersistGate loading={null} persistor={persistor}>
        <div />
      </PersistGate>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
