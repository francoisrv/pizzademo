import React from 'react'
import Typography from '@material-ui/core/Typography'
import Ratings from '../Ratings'
import { useIsMobile } from '../../hooks'

export interface RestaurantHeaderProps {
  name: string
  ratings: number
}

export default function RestaurantHeader(props: RestaurantHeaderProps) {
  const { name, ratings } = props
  const isMobile = useIsMobile()

  return (
    <header className="restaurant-header">
      <div>
        <Typography variant={isMobile ? 'h4' : 'h2'}>{name}</Typography>
        <Ratings ratings={ratings} size={isMobile ? 2 : 4.5} />
      </div>
    </header>
  )
}
