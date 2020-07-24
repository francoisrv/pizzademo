import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'

import { Pizza } from '../../types'
import Ingredients from '../Ingredients'

export interface MenuProps {
  pizzas: Pizza[]
}

const Menu: React.FC<MenuProps> = (props) => {
  const [selectedPizza, setSelectedPizza] = React.useState<Pizza | null>(null)

  return (
    <div className="menu">
      <div className="menu-list-wrapper">
        <GridList
          cellHeight={210}
          cols={3}
          spacing={0}
          style={{ backgroundColor: 'white' }}
        >
          {props.pizzas.map((pizza) => (
            <GridListTile
              key={pizza.name}
              cols={pizza.cols}
              rows={pizza.rows}
              onClick={() => {
                setSelectedPizza(pizza)
              }}
            >
              <img src={pizza.image} />
              <GridListTileBar
                title={pizza.name}
                subtitle={`€${pizza.price}`}
                actionIcon={
                  <IconButton>
                    <AddShoppingCartIcon style={{ color: 'white' }} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <Ingredients
        open={Boolean(selectedPizza)}
        pizza={selectedPizza}
        onClose={() => setSelectedPizza(null)}
      />
    </div>
  )
}

export default Menu
