import { useDispatch, useSelector } from "react-redux"

import { addCartItemsAction, subCartItemsAction, clearCartItemsAction } from "../../store/cart/cart.action"
import { cartItemsSelector } from "../../store/cart/cart.selector"

import { CheckoutItemContainer, CheckoutQuantity, ImageBox } from "./checkout-item.styles"

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, quantity, price } = product

  const dispatch = useDispatch()

  const cartItems = useSelector(cartItemsSelector)

  const addCartItemHandle = () => dispatch(addCartItemsAction(cartItems, product))
  const subCartItemHandle = () => dispatch(subCartItemsAction(cartItems, product))
  const clearCartItemHandle = () => dispatch(clearCartItemsAction(cartItems, product))

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