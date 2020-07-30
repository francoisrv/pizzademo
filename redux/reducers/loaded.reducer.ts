import ReduxState from '../state'
import { appIsLoaded } from '../actions/app.actions'
import { ReduxActionType } from '../types'

type State = ReduxState['loaded']

type Actions = ReturnType<typeof appIsLoaded>

const initialState: State = false

export default function loadedReducer(
  state: State = initialState,
  action: Actions
): State {
  if (action.type === ReduxActionType.APP_IS_LOADED) {
    return true
  }
  return state
}
