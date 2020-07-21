import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline'
import ShowOnScroll from './ShowOnScroll'
import Appbar from './Appbar'
import Restaurant from './Restaurant.component'

export default function RestaurantWrapper() {
  const [mounted, setMounted] = React.useState(false)
  if (!mounted) {
    setTimeout(() => {
      setMounted(true)
    })
  }

  return (
    <div className="restaurant-wrapper">
      <CssBaseline />
      {mounted && (
        <ShowOnScroll>
          <div>
            <Appbar />
          </div>
        </ShowOnScroll>
      )}
      <Restaurant />
    </div>
  )
}
