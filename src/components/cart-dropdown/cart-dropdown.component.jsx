import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"
import { CartContext } from "../../contexts/cart.context"

import { CartDropdownContainer, CartProductContainer } from "./cart-dropdown.styles"

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext)
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