import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"

import { CheckoutItemContainer, CheckoutQuantity, ImageBox } from "./checkout-item.styles"

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, quantity, price } = product

  const { addCartItems, subCartItems, clearCartItems } = useContext(CartContext)

  const addCartItemHandle = () => addCartItems(product)
  const subCartItemHandle = () => subCartItems(product)
  const clearCartItemHandle = () => clearCartItems(product)

  return (
    <CheckoutItemContainer>
      <ImageBox>
        <img src={imageUrl} alt={`${name}`} />
      </ImageBox>
      <span className="checkout-name">{name}</span>
      <CheckoutQuantity>
        <span className="symbol" onClick={subCartItemHandle}>&#10094;</span>
        <span className="checkout-quantity-num">{quantity}</span>
        <span className="symbol" onClick={addCartItemHandle}>&#10095;</span>
      </CheckoutQuantity>
      <span className="checkout-price">{price}</span>
      <span className="checkout-clear" onClick={clearCartItemHandle}>&#10005;</span>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem