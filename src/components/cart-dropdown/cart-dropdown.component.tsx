import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"

import { cartItemsSelector } from "../../store/cart/cart.selector"

import { CartDropdownContainer, CartProductContainer } from "./cart-dropdown.styles"

const CartDropdown = () => {
  const cartItems = useSelector(cartItemsSelector)
  const navigate = useNavigate()

  const goToCartCheckout = () => navigate("/checkout")
  
  return (
    <CartDropdownContainer>
      <CartProductContainer>
        {
          cartItems.map(product => {
            return (
              <CartItem key={product.id} product={product}/>
            )
          })
        }
      </CartProductContainer>
      <Button onClick={goToCartCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown