import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { userCurrentSelector } from "../../store/user/user.selector"
import { cartDownToggleSelector } from "../../store/cart/cart.selector"
import { signOutUserStartAction } from "../../store/user/user.action";


import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { NavLink, NavLogoContainer, NavigationContainer, NavLinkContaier } from "./navigation.styles"

const Navigation = () => {

  const dispatch = useDispatch()

  const currentUser = useSelector(userCurrentSelector)
  const toggle = useSelector(cartDownToggleSelector)

  const signOut = () => dispatch(signOutUserStartAction())

  return (
    <Fragment>
      <NavigationContainer>
        <NavLogoContainer to="/">
          <CrwnLogo className="logo" />
        </NavLogoContainer>
        <NavLinkContaier>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOut}>SIGN OUT</NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinkContaier>
        {toggle && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
