import { CartItemContainer, CartItemMsg } from "./cart-item.styles"

const CartItem = ({product}) => {
  
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