import { useSelector } from "react-redux"

import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import Payment from "../../components/payment/payment.component"

import { cartItemsSelector, cartTotalPriceSelector } from "../../store/cart/cart.selector"

import { CheckoutContainer, TitleBar, TitleItem, CheckoutTotal } from "./checkout.styles"

const Checkout = () => {

  const cartItems = useSelector(cartItemsSelector)
  const cartTotalPrice = useSelector(cartTotalPriceSelector)

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
        Total: ${cartTotalPrice}
      </CheckoutTotal>
      <Payment />
    </CheckoutContainer>
  )
}

export default Checkout