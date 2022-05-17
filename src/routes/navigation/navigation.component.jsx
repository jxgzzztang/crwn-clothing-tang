import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context"
import { signOutAuth } from "../../utils/firebase/firebase.utils"

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// import "./navigation.styles.scss";
import { NavLink, NavLogoContainer, NavigationContainer, NavLinkContaier } from "./navigation.styles.jsx"

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { toggle }  = useContext(CartContext)
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
            <NavLink as="span" onClick={signOutAuth}>SIGN OUT</NavLink>
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
