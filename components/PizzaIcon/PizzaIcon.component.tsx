import React from 'react'

import './PizzaIcon.css'

export interface PizzaIconProps {
  alt: string
}

export default function PizzaIcon(props: PizzaIconProps) {
  return (
    <img
      className="pizza-icon"
      src="https://storage.cloud.google.com/pizzame/pizza.png"
      alt={props.alt}
    />
  )
}
