import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"

import Button from "../button/button.component"

import { ProductCardContainer, Footer } from "./shop-card.styles"

const ShopCard = ({ product }) => {

  const { name, imageUrl, price } = product 

  const { addCartItems } = useContext(CartContext)

  const addCartProductHandle = () => addCartItems(product)

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button buttonType="inverted" onClick={addCartProductHandle}>ADD TO CART</Button>
    </ProductCardContainer>
  )
}

export default ShopCard