import React from 'react'
import { useLaxElement, useLax } from 'use-lax'

function Bubble() {
  const ref = useLaxElement()

  return (
    <div ref={ref} className="bubble" data-lax-preset="leftToRight fadeInOut" />
  )
}

export default function restaurant() {
  const [showBubble, setBubble] = React.useState(false)
  const toggleBubble = () => {
    setBubble(!showBubble)
  }
  useLax()
  return (
    <div style={{ height: 8000, border: '2px solid black', overflow: 'auto' }}>
      <button className="toggle-bubble" onClick={toggleBubble}>
        Toggle Bubble
      </button>
      <p>{showBubble ? '..now scroll down..' : '^ press the button ^'}</p>
      {showBubble ? <Bubble /> : null}
    </div>
  )
}
