import type { AnyAction } from "redux";
import { CartType } from "./cart.types";

import { setChangeToggleAction, setCartItemsAction } from "./cart.action";

const CART_DEFAULT_STATE: CartType = {
  toggle: false,
  cartItems: [],
};

const cartReducer = (
  state = CART_DEFAULT_STATE,
  action = {} as AnyAction
): CartType => {
  if (setChangeToggleAction.match(action)) {
    return {
      ...state,
      toggle: action.payload,
    };
  }

  if (setCartItemsAction.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};

export default cartReducer;
