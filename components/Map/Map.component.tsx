import React from 'react'
import ReactMapGL, { ViewportProps } from 'react-map-gl'

import config from '../../config'
import { useIsMobile } from '../../hooks'

export interface MapProps {
  latitude: number
  longitude: number
}

const Map: React.FC<MapProps> = (props) => {
  const isMobile = useIsMobile()

  function onSetViewPort(props: MapProps): ViewportProps {
    return {
      latitude: props.latitude,
      longitude: props.longitude,
      // @ts-ignore
      width: '100%',
      // @ts-ignore
      height: '100%',
      zoom: isMobile ? 14 : 15,
      transitionDuration: 3000,
    }
  }

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
      mapStyle="mapbox://styles/franleweb/ckdiva8n30ynh1imoehk6wtez"
    >
      {props.children}
    </ReactMapGL>
  )
}

export default Map
