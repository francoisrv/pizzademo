import MapOutlinedIcon from '@material-ui/icons/MapOutlined'
import React from 'react'
import Fab from '@material-ui/core/Fab'

export interface MapIconProps {
  show: boolean
  onClick: () => any
}

export default function MapIcon(props: MapIconProps) {
  const { show, onClick } = props

  if (!show) {
    return <></>
  }

  return (
    <Fab color="default" size="large" onClick={onClick}>
      <MapOutlinedIcon />
    </Fab>
  )
}
