import React from 'react'
import { pick } from 'lodash'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import { Restaurant } from '../../types'
import Menu from '../Menu'
import SlideOnScroll from '../SlideOnScroll'
import Appbar from '../Appbar'
import RestaurantHeader from '../RestaurantHeader'
import RestaurantVideo from '../RestaurantVideo'
import { useIsMobile } from '../../hooks'

export interface RestaurantViewProps {
  restaurant?: Restaurant
}

const RestaurantView: React.FC<RestaurantViewProps> = (props) => {
  const { restaurant } = props
  const [menuOpen, setMenuOpen] = React.useState(false)
  const isMobile = useIsMobile()

  return (
    <div id="restaurant">
      {!isMobile && (
        <>
          <SlideOnScroll>
            <div>
              <Appbar />
            </div>
          </SlideOnScroll>

          <div style={{ marginTop: 64 }}>
            <div className="video-parallax-container">
              <div className="video-parallax-wrapper">
                <RestaurantVideo name={restaurant.name} />
              </div>
            </div>
          </div>
        </>
      )}

      {isMobile && (
        <>
          <SlideOnScroll>
            <div>
              <Appbar />
            </div>
          </SlideOnScroll>
          <div style={{ marginTop: 56, marginBottom: -8 }}>
            <div className="video-parallax-container">
              <div className="video-parallax-wrapper">
                <RestaurantVideo name={restaurant.name} />
              </div>
            </div>
          </div>
          <Menu />
        </>
      )}
    </div>
  )
}

export default RestaurantView

/*
<Menu />

          <Dialog open={menuOpen}>
            <DialogTitle>Menu</DialogTitle>
            <DialogContent>
              <Menu />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setMenuOpen(false)}>Close</Button>
              <Button>Checkout</Button>
            </DialogActions>
          </Dialog>
          */
