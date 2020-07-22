import React from 'react'
import CartItem from '.'
import menu from '../../menu.json'

export default {
  title: 'Cart / Cart Item',
}

export const ReduxExample = () => (
  <div style={{ width: '80vw', height: '80vh' }}>
    <CartItem pizza={{ ...menu[0], quantity: 1 }} />
  </div>
)

ReduxExample.story = {
  name: 'With redux',
}
