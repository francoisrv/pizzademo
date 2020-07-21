import React from 'react'
import ReactMapGL, { ViewportProps } from 'react-map-gl'

import config from '../config'

interface PizzaMapProps {
  latitude: number
  longitude: number
}

function onSetViewPort(props: PizzaMapProps): ViewportProps {
  return {
    latitude: props.latitude,
    longitude: props.longitude,
    width: '100%',
    height: '100%',
    zoom: 15,
    transitionDuration: 3000,
  }
}

const PizzaMap: React.FC<PizzaMapProps> = (props) => {
  const [viewport, setViewport] = React.useState<ViewportProps>(
    onSetViewPort(props)
  )

  React.useEffect(() => {
    onSetViewPort(props)
  }, [props])

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={config.mapToken}
      onViewportChange={(viewport) => {
        setViewport(viewport)
      }}
    >
      {props.children}
    </ReactMapGL>
  )
}

export default PizzaMap
