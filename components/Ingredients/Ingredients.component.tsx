import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import { get } from 'lodash'
import Slide from '@material-ui/core/Slide'
import { TransitionProps } from '@material-ui/core/transitions'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import ListSubheader from '@material-ui/core/ListSubheader'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import CloseIcon from '@material-ui/icons/Close'

import { Pizza } from '../../types'
import { addToCart } from '../../redux/actions/cart.actions'

export interface IngredientsProps {
  open: boolean
  onClose: () => any
  pizza: Pizza
  addToCart: typeof addToCart
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Ingredients: React.FC<IngredientsProps> = (props) => (
  <Dialog
    open={props.open}
    onClose={props.onClose}
    TransitionComponent={Transition}
  >
    <DialogTitle>
      <div>{get(props.pizza, 'name', '')}</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography>€{get(props.pizza, 'price')}</Typography>
      </div>
    </DialogTitle>
    <DialogContent>
      <div>
        <img
          src={get(props.pizza, 'image', '')}
          style={{
            objectFit: 'cover',
            width: '100%',
            borderRadius: 8,
          }}
        />
      </div>
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Ingredients
          </ListSubheader>
        }
      >
        {
          // @ts-ignore
          get(props.pizza, 'ingredients', []).map((ingredient) => (
            <ListItem key={ingredient}>
              <ListItemText primary={ingredient} />
            </ListItem>
          ))
        }
      </List>
    </DialogContent>
    <DialogActions>
      <Button
        color="secondary"
        startIcon={<CloseIcon />}
        onClick={props.onClose}
      >
        Cancel
      </Button>
      <Button
        startIcon={<AddShoppingCartIcon />}
        color="primary"
        onClick={() => {
          props.addToCart(props.pizza)
          props.onClose()
        }}
      >
        Add to cart
      </Button>
    </DialogActions>
  </Dialog>
)

export default Ingredients
