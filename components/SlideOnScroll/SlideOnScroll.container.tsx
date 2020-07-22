import React from 'react'
import SlideOnScroll from './SlideOnScroll.component'

export interface SlideOnScrollContainerProps {
  children: React.ReactElement
}

export default function SlideOnScrollContainer(
  props: SlideOnScrollContainerProps
) {
  const [ready, setReady] = React.useState(false)
  const target = document.querySelector('#restaurant')
  if (!target && !ready) {
    setTimeout(() => {
      setReady(true)
    })
    return <div />
  }
  console.log({ target })
  return <SlideOnScroll target={target}>{props.children}</SlideOnScroll>
}
