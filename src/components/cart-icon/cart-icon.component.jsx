import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"

import { ReactComponent as ShoppongLogo } from "../../assets/shopping-bag.svg"

import { LogoShopping, Num } from "./cart-icon.styles"

const CartIcon = () => {

  const { toggle, setToggle, total } = useContext(CartContext)

  const cartToggleHandle = () => setToggle(!toggle)

  return (
    <LogoShopping onClick={cartToggleHandle}>
      <ShoppongLogo />
      <Num>{total}</Num>
    </LogoShopping>
  )
}

export default CartIcon