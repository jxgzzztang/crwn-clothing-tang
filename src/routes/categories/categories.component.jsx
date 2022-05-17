import { useContext } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";

import "./categories.styles.scss";

const Categories = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div>
      {
        Object.keys(categories).map((title) => {
          const product = categories[title]
          return (
            <CategoryPreview key={title} title={title} products={product} />
          );
        })
      }
    </div>
  );
};

export default Categories;
