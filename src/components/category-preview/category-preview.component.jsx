import { Link } from "react-router-dom"

import ShopCard from "../shop-card/shop-card.component"

import { CategoriesPreviewContainer, ProductContainer } from "./category-preview.styles"

const CategoriesPreview = ({ title, products }) => {
  return (
    <CategoriesPreviewContainer>
      <h2>
        <Link to={`${title}`}>{ title }</Link>
      </h2>
      <ProductContainer>
        {
          products.filter((_, index) => index < 4).map(product => {
            return <ShopCard key={product.id} product={product} />
          })
        }
      </ProductContainer>
    </CategoriesPreviewContainer>
  )
}

export default CategoriesPreview