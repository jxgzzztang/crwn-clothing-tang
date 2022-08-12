import { useDispatch, useSelector } from "react-redux"

import { cartDownToggleSelector, cartTotalSelector } from "../../store/cart/cart.selector"
import { setChangeToggleAction } from "../../store/cart/cart.action"

import { ReactComponent as ShoppongLogo } from "../../assets/shopping-bag.svg"

import { LogoShopping, Num } from "./cart-icon.styles"

const CartIcon = () => {
  const dispatch = useDispatch()

  const toggle = useSelector(cartDownToggleSelector)
  const total = useSelector(cartTotalSelector)

  const cartToggleHandle = () => dispatch(setChangeToggleAction(!toggle))

  return (
    <LogoShopping onClick={cartToggleHandle}>
      <ShoppongLogo />
      <Num>{total}</Num>
    </LogoShopping>
  )
}

export default CartIcon