import React from 'react'

export interface LayoutProps {
  map: React.ReactElement
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <div className="map-container">{props.map}</div>

      <div></div>
    </div>
  )
}
