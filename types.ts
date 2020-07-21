export interface Restaurant {
  name: string
  latitude: number
  longitude: number
  ratings: number
}

export interface Pizza {
  name: string
  price: number
  ingredients: string[]
  image: string
  cols: number
  rows: number
}

export interface PizzaCart extends Pizza {
  quantity: number
}
