import React from 'react'
import SlideOnScroll from './SlideOnScroll.component'

export interface SlideOnScrollContainerProps {
  target?: HTMLElement | Window | Element
  children: React.ReactElement
}

const SlideOnScrollContainer: React.FC<SlideOnScrollContainerProps> = (
  props
) => {
  const [ready, setReady] = React.useState(false)
  const { target } = props
  if (!target && !ready) {
    setTimeout(() => {
      setReady(true)
    })
    return <div />
  }
  console.log({ target })
  return <SlideOnScroll target={target}>{props.children}</SlideOnScroll>
}

SlideOnScrollContainer.defaultProps = {
  target: window,
}

export default SlideOnScrollContainer
