export interface Restaurant {
  name: string
  coords: [number, number]
  ratings: number
  id: string
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
