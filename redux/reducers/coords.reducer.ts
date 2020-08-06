import { setCoords } from '../actions/map.actions'
import ReduxState from '../state'
import { ReduxActionType } from '../types'
import config from '../../config'

type State = ReduxState['coords']

type Actions = ReturnType<typeof setCoords>

const initialState: State = [config.latitude, config.longitude]

export default function coordsReducer(
  state: State = initialState,
  action: Actions
): State {
  if (action.type === ReduxActionType.SET_COORDS) {
    return action.payload.coords
  }
  return state
}
