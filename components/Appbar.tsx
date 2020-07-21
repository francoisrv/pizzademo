import React, { PropsWithChildren } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { pick } from 'lodash'
import { connect } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Slide from '@material-ui/core/Slide'

import ReduxState from '../redux/state'
import { openCart } from '../redux/actions/cart.actions'

type AppbarStore = Pick<ReduxState, 'cart'> & Pick<ReduxState, 'cartOpen'>

interface AppbarActions {
  openCartAction: typeof openCart
}

type AppbarProps = AppbarStore & AppbarActions

const connector = (state: ReduxState): AppbarStore =>
  pick(state, ['cart', 'cartOpen'])

const actions: AppbarActions = {
  openCartAction: openCart,
}

const withStore = connect(connector, actions)

function ShowOnScroll(props: {
  window?: () => Window
  children: React.ReactElement
}) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Appbar: React.FC<AppbarProps> = (props) => {
  function openCartAction() {
    if (!props.cartOpen) {
      if (props.cart.length) {
        props.openCartAction()
      }
    }
  }

  return (
    <>
      <CssBaseline />
      <ShowOnScroll>
        <AppBar position="fixed">
          <Toolbar>
            <div style={{ flex: 1 }}>
              <Typography>pizza by london</Typography>
            </div>
            <div>
              <IconButton onClick={openCartAction}>
                <Badge badgeContent={props.cart.length} color="secondary">
                  <AddShoppingCartIcon style={{ color: 'white' }} />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </ShowOnScroll>
    </>
  )
}

export default withStore(Appbar)
