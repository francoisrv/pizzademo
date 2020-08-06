import React from 'react'
import { useSpring, animated } from 'react-spring'

import './Restaurant.css'

import { Restaurant } from '../../types'
import RestaurantVideo from '../RestaurantVideo'
import MenuList from '../MenuList'

export interface RestaurantViewProps {
  restaurant?: Restaurant
}

const RestaurantView: React.FC<RestaurantViewProps> = (props) => {
  const { restaurant } = props
  const { opacity, top } = useSpring({
    opacity: 1,
    top: '0vh',
    from: { opacity: 0, top: '-100vh' },
    // delay: 500,
    // config: {  },
  })
  const videoAnimation = useSpring({
    top: 0,
  })
  const menuRef = React.useRef()

  function onMenuScroll(e) {
    // const { currentTarget } = e
    // const { height } = currentTarget.getBoundingClientRect()
    // const { scrollTop } = currentTarget
  }

  return (
    <animated.div
      id="restaurant"
      style={{ opacity, top }}
      onScroll={onMenuScroll}
    >
      <div id="restaurant-video">
        <RestaurantVideo name={restaurant.name} />
      </div>
      <div id="restaurant-menu" ref={menuRef}>
        <MenuList />
      </div>
    </animated.div>
  )
}

export default RestaurantView
