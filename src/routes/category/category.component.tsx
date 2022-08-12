import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ShopCard from "../../components/shop-card/shop-card.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  categorySelector,
  categoryLoadingSelector,
} from "../../store/category/category.selector";

import { CategoryContainer, CategoryProductContainer } from "./category.styles";

import { ProductType } from "../../store/cart/cart.types"

export type CategoryRouteType = {
  category: string
}

const Category = () => {
  const { category } = useParams<keyof CategoryRouteType>() as CategoryRouteType;
  const categories = useSelector(categorySelector);
  const loading = useSelector(categoryLoadingSelector);
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const products = categories[category];
    setProducts(products);
  }, [categories, category]);

  return (
    <CategoryContainer>
      <h2>{category}</h2>
      {loading ? (
        <Spinner />
      ) : (
        <CategoryProductContainer>
          {products &&
            products.map((prod) => {
              return <ShopCard key={prod!.id} product={prod} />;
            })
          }
        </CategoryProductContainer>
      )}
    </CategoryContainer>
  );
};

export default Category;
