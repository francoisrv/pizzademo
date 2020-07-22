import createStore from '../redux/createStore'
import { Provider } from 'react-redux'
import React from 'react'

export function withReduxDecorator(storyFn: any) {
  const { store } = createStore()
  return <Provider store={store}>{storyFn()}</Provider>
}
