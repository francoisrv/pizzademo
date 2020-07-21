import React from 'react'
import ReactMapGL, { ViewportProps } from 'react-map-gl'

import config from '../../config'

export interface MapProps {
  latitude: number
  longitude: number
}

function onSetViewPort(props: MapProps): ViewportProps {
  return {
    latitude: props.latitude,
    longitude: props.longitude,
    // @ts-ignore
    width: '100%',
    // @ts-ignore
    height: '100%',
    zoom: 15,
    transitionDuration: 3000,
  }
}

const Map: React.FC<MapProps> = (props) => {
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

export default Map
