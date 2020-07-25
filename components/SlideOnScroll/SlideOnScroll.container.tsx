import React from 'react'
import SlideOnScroll from './SlideOnScroll.component'

export interface SlideOnScrollContainerProps {
  target: string
  children: React.ReactElement
}

const SlideOnScrollContainer: React.FC<SlideOnScrollContainerProps> = (
  props
) => {
  const [ready, setReady] = React.useState(false)
  const { target } = props
  const elem = document.querySelector(target)
  console.log({ target, elem })
  if (!elem && !ready) {
    setTimeout(() => {
      setReady(true)
    }, 2000)
    return <div />
  }
  if (!elem) {
    return <h1>No target</h1>
  }
  return <SlideOnScroll target={elem}>{props.children}</SlideOnScroll>
}

export default SlideOnScrollContainer
