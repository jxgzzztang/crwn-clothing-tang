import { createContext, useState, useEffect } from "react"

const addCartItemsHandle = (cartItems, product) => {

  const cartItem = cartItems.find((itemProduct) => {
    return itemProduct.id === product.id
  })

  // 数组不为空, 添加存在商品类目
  if(cartItem) {
    return cartItems.map(item => {
      return item.id === cartItem.id ? { ...cartItem, quantity: cartItem.quantity + 1} : item
    })
  }
  
  // 没找到该商品则直接判定无, 直接添加新product, 并初始化个数为1
  return [...cartItems, {...product, quantity: 1}]
}

const subCartItemsHandle = (cartItems, product) => {
  // 从商品数组中减1
  const cartItem = cartItems.find((itemProduct) => {
    return itemProduct.id === product.id
  })

  // 如果最后该商品只有1, 直接删除
  if(cartItem.quantity === 1) {
    return cartItems.filter(item => (item.id !== product.id))
  }
  // 否则quantity -1
  return cartItems.map(item => (item.id === cartItem.id ? { ...cartItem, quantity: cartItem.quantity - 1} : item))

}

const clearCartItemsHandle = (cartItems, product) => {
  return cartItems.filter(item => (item.id !== product.id))
}

export const CartContext = createContext({
  cartItems: [],
  toggle: false,
  setToggle: () => null,
  addCartItems: () => null,
  subCartItems: () => null,
  clearCartItems: () => null,
  total: 0,
  totalPrice: 0
})

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([])
  const [toggle, setToggle] = useState(false);
  const [total, setTotal] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const newTotal = cartItems.reduce((prevTotal, item) => {
      return item.quantity + prevTotal
    }, 0)
    setTotal(newTotal)
  }, [cartItems])

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((prevTotal, item) => {
      return item.quantity * item.price + prevTotal
    }, 0)

    setTotalPrice(newTotalPrice)
  }, [cartItems])

  const addCartItems = (product) => setCartItems(addCartItemsHandle(cartItems, product))
  const subCartItems = (product) => setCartItems(subCartItemsHandle(cartItems, product))
  const clearCartItems = (product) => setCartItems(clearCartItemsHandle(cartItems, product))

  const value = {
    cartItems,
    toggle,
    setToggle,
    addCartItems,
    subCartItems,
    total,
    totalPrice,
    clearCartItems
  }

  return (
    <CartContext.Provider value={value}>{ children }</CartContext.Provider>
  )
}

export default CartProvider