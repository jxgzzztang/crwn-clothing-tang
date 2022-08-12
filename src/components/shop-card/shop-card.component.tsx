import type { FC } from "react"
import { useSelector, useDispatch } from "react-redux"

import { addCartItemsAction } from "../../store/cart/cart.action"
import { cartItemsSelector } from "../../store/cart/cart.selector"

import Button from "../button/button.component"

import { ProductCardContainer, Footer } from "./shop-card.styles"

import type { ProductType } from "../../store/cart/cart.types"
import { BUTTONTYPE_MAPPER } from "../button/button.component"

export type ShopCardPropsType = {
  product: ProductType
}

const ShopCard: FC<ShopCardPropsType> = ({ product }) => {

  const { name, imageUrl, price } = product 
  const dispatch = useDispatch()
  const cartItems = useSelector(cartItemsSelector)

  const addCartProductHandle = () => dispatch(addCartItemsAction(cartItems, product))

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button buttonType={BUTTONTYPE_MAPPER.inverted} onClick={addCartProductHandle}>ADD TO CART</Button>
    </ProductCardContainer>
  )
}

export default ShopCard