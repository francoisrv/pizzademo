import { ReduxActionType } from '../types'

export function loadApp() {
  return {
    type: ReduxActionType.LOAD_APP as ReduxActionType.LOAD_APP,
  }
}

export function appIsLoaded() {
  return {
    type: ReduxActionType.APP_IS_LOADED as ReduxActionType.APP_IS_LOADED,
  }
}
