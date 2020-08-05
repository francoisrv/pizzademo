import React from 'react'
import { CircularProgress, Typography } from '@material-ui/core'

import './Splash.css'

export default function Splash() {
  return (
    <div className="splash">
      <CircularProgress size={100} />
      <Typography variant="h4" className="splash-title">
        Loading pizzas...
      </Typography>
    </div>
  )
}
