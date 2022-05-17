import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ShopCard from "../../components/shop-card/shop-card.component"
import { CategoriesContext } from "../../contexts/categories.context"

import { CategoryContainer, CategoryProductContainer } from "./category.styles"

const Category = () => {

  const { category } = useParams()
  const { categories } = useContext(CategoriesContext)  
  const [products, setProducts] = useState([])

  useEffect(() => {
    const products = categories[category]
    setProducts(products)
  }, [categories, category])

  return (
    <CategoryContainer>
      <h2>{category}</h2>
      <CategoryProductContainer>
        {
          products && products.map((prod) => {
            return <ShopCard key={prod.id} product={prod} />
          })
        }
      </CategoryProductContainer>
    </CategoryContainer>
  )
}

export default Category