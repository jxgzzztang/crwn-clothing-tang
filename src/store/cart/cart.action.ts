import { CART_ACTION_TYPES, ProductType } from "./cart.types";
import { Item } from "../category/category.types";

import { withMatcher, ActionWithPayload } from "../../utils/reducer/reducer.utils";

const addCartItemsHandle = (
  cartItems: ProductType[],
  product: Item
): ProductType[] => {
  const cartItem = cartItems.find((itemProduct) => {
    return itemProduct?.id === product?.id;
  });

  // 数组不为空, 添加存在商品类目
  if (cartItem) {
    return cartItems.map((item) => {
      return item.id === cartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : item;
    });
  }

  // 没找到该商品则直接判定无, 直接添加新product, 并初始化个数为1
  return [...cartItems, { ...product, quantity: 1 }];
};

const subCartItemsHandle = (
  cartItems: ProductType[],
  product: ProductType
): ProductType[] => {
  // 从商品数组中减1
  const cartItem = cartItems.find((itemProduct) => {
    return itemProduct.id === product.id;
  });

  // 如果最后该商品只有1, 直接删除
  if (cartItem?.quantity === 1) {
    return cartItems.filter((item) => item.id !== product.id);
  }
  // 否则quantity -1
  return cartItems.map((item) =>
    item.id === cartItem?.id
      ? { ...cartItem, quantity: cartItem?.quantity - 1 }
      : item
  );
};

const clearCartItemsHandle = (
  cartItems: ProductType[],
  product: ProductType
): ProductType[] => {
  return cartItems.filter((item) => item.id !== product.id);
};


export type changeToggleActionType = ActionWithPayload<CART_ACTION_TYPES.CHANGE_TOGGLE, boolean>

export type setCartItemsActionType = ActionWithPayload<CART_ACTION_TYPES.CHANGE_CARTITEMS, ProductType[]>

export const setChangeToggleAction = withMatcher((payload: boolean): changeToggleActionType => ({
  type: CART_ACTION_TYPES.CHANGE_TOGGLE,
  payload,
}));

export const setCartItemsAction = withMatcher((cartItems: ProductType[]): setCartItemsActionType => {
  return { type: CART_ACTION_TYPES.CHANGE_CARTITEMS, payload: cartItems };
});

export const addCartItemsAction = (cartItems: ProductType[], product: Item) => {
  const newCartItems = addCartItemsHandle(cartItems, product);
  return setCartItemsAction(newCartItems);
};
export const subCartItemsAction = (
  cartItems: ProductType[],
  product: ProductType
) => {
  const newCartItems = subCartItemsHandle(cartItems, product);
  return setCartItemsAction(newCartItems);
};

export const clearCartItemsAction = (
  cartItems: ProductType[],
  product: ProductType
) => {
  const newCartItems = clearCartItemsHandle(cartItems, product);
  return setCartItemsAction(newCartItems);
};
