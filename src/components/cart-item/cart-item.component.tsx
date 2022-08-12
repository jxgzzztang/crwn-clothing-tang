import { CartItemContainer, CartItemMsg } from "./cart-item.styles"

import type { ProductType } from "../../store/cart/cart.types"
import { FC } from "react"

export type ProductPropsType = {
  product: ProductType
}

const CartItem: FC<ProductPropsType> = ({product}) => {
  
  const { name, imageUrl, quantity, price } = product

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <CartItemMsg>
        <span>{name}</span>
        <span>{quantity} x ${price}</span>
      </CartItemMsg>
    </CartItemContainer>
  )
}

export default CartItem