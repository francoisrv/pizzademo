import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { DialogActions } from '@material-ui/core'
import { PizzaCart } from '../../types'
import CartItem from '../CartItem'
import { checkOut } from '../../redux/actions/cart.actions'

export interface CartProps {
  pizzas: PizzaCart[]
  price: number
  open: boolean
  close: () => void
  length: number
  checkOut: typeof checkOut
}

const Cart: React.FC<CartProps> = (props) => {
  const { pizzas, price, open, close, length } = props

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>
        <AddShoppingCartIcon />
        Cart x{length}
      </DialogTitle>
      <DialogContent>
        <List>
          {pizzas.map((pizza, index) => (
            <CartItem key={index} pizza={pizza} />
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={close}>
          Close
        </Button>
        <Button variant="contained" color="primary" onClick={props.checkOut}>
          Check out €{price.toFixed(2)}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Cart
