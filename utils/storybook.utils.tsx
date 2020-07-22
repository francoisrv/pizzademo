import createStore from '../redux/createStore'
import { Provider } from 'react-redux'
import React from 'react'
import ReduxState from '../redux/state'
import { AnyAction } from 'redux'

export interface DispatcherProps {
  children: React.ReactElement
  action: AnyAction
}

export function withReduxDecorator(initialState: Partial<ReduxState> = {}) {
  const { store } = createStore(initialState)
  // return function (storyFn: any) {
  //   return <Provider store={store}>{storyFn()}</Provider>
  // }
  return {
    decorator: (storyFn: any) => <Provider store={store}>{storyFn()}</Provider>,
    dispatch: (action: AnyAction) => store.dispatch(action),
    Dispatcher: (props: DispatcherProps) => {
      const [dispatched, setDispatched] = React.useState(false)
      if (!dispatched) {
        setTimeout(() => {
          store.dispatch(props.action)
          setTimeout(() => {
            setDispatched(true)
          })
        })
        return <div />
      }
      return props.children
    },
  }
}

export function WithRedux(props: {
  state?: Partial<ReduxState>
  children: React.ReactElement
}) {
  const { store } = createStore(props.state)
  console.log(store.getState())
  return <Provider store={store}>{props.children}</Provider>
}
