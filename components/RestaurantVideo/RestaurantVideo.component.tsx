import React from 'react'
import ReactPlayer from 'react-player'
import { kebabCase } from 'lodash'

export interface RestaurantVideoProps {
  name: string
}

export default function RestaurantVideo(props: RestaurantVideoProps) {
  const { name } = props

  return (
    <ReactPlayer
      height="100%"
      loop
      playing
      url={`https://storage.cloud.google.com/pizzame/${kebabCase(name)}.webm`}
      width="100%"
      controls
    />
  )
}
