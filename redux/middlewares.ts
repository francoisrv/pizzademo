import { createLogger } from 'redux-logger'
import { compact } from 'lodash'
import { routerMiddleware } from 'connected-react-router'

import config from '../config'
import sagaMiddleware from '../sagas/middleware'

const middlewares = compact([
  // Redux logger middleware
  process.env.NODE_ENV === 'development' &&
    createLogger({
      collapsed: true,
      diff: true,
    }),

  // Redux saga
  sagaMiddleware,

  // Router
  routerMiddleware(config.history),
])

export default middlewares
