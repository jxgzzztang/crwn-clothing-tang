import { createSelector } from "reselect"

import { CartType } from "./cart.types"
import type { RootState } from "../index"

const cartSelectorReducer = (state: RootState): CartType => state.cart

export const cartItemsSelector = createSelector([cartSelectorReducer], (cart) => cart.cartItems)
export const cartDownToggleSelector = createSelector([cartSelectorReducer], cart => cart.toggle)

export const cartTotalSelector = createSelector([cartItemsSelector], (cartItems) => {
  const total = cartItems.reduce((prevTotal, item) => {
    return item.quantity + prevTotal
  }, 0)
  return total
})

export const cartTotalPriceSelector = createSelector([cartItemsSelector], (cartItems) => {
  const totalPrice = cartItems.reduce((prevTotal, item) => {
    return item.quantity * item.price + prevTotal
  }, 0)
  return totalPrice
})