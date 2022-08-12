export enum CART_ACTION_TYPES {
  CHANGE_TOGGLE = "cart/CHANGE_TOGGLE",
  CHANGE_CARTITEMS = "cart/SET_CHANGE_CARTITEMS"
}

export type CartType = {
  readonly toggle: boolean,
  readonly cartItems: ProductType[]
}

export type ProductType = {
  id: number
  imageUrl: string
  name: string
  price: number
  quantity: number
}