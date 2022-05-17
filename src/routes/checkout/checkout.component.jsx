import { useContext } from "react"

import CheckoutItem from "../../components/checkout-item/checkout-item.component"

import { CartContext } from "../../contexts/cart.context"

// import "./checkout.styles.scss"
import { CheckoutContainer, TitleBar, TitleItem, CheckoutTotal } from "./checkout.styles"

const Checkout = () => {

  const { cartItems, totalPrice } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <TitleBar>
        <TitleItem>
          <span>Product</span>
        </TitleItem>
        <TitleItem>
          <span>Description</span>
        </TitleItem>
        <TitleItem>
          <span>Quantity</span>
        </TitleItem>
        <TitleItem>
          <span>Price</span>
        </TitleItem>
        <TitleItem>
          <span>Remove</span>
        </TitleItem>
      </TitleBar>
      {
        cartItems.map((product) => {
          return <CheckoutItem key={product.id} product={product} />
        })
      }
      <CheckoutTotal>
        Total: ${totalPrice}
      </CheckoutTotal>
    </CheckoutContainer>
  )
}

export default Checkout