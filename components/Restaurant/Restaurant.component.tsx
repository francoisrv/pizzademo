import React from 'react'

import { Restaurant } from '../../types'
import Menu from '../Menu'
import SlideOnScroll from '../SlideOnScroll'
import Appbar from '../Appbar'
import RestaurantVideo from '../RestaurantVideo'
import { useIsMobile } from '../../hooks'
import MenuList from '../MenuList'

export interface RestaurantViewProps {
  restaurant?: Restaurant
}

const RestaurantView: React.FC<RestaurantViewProps> = (props) => {
  const { restaurant } = props
  const [] = React.useState(false)
  const isMobile = useIsMobile()

  return (
    <div id="restaurant">
      {!isMobile && (
        <div>
          <SlideOnScroll target="#menu">
            <div>
              <Appbar />
            </div>
          </SlideOnScroll>

          <div className="wrapper">
            <RestaurantVideo name={restaurant.name} />
          </div>

          <MenuList />
        </div>
      )}

      {isMobile && (
        <>
          <SlideOnScroll target=".menu">
            <div></div>
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
