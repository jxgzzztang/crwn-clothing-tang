import { useSelector} from "react-redux"

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component"
import { categorySelector, categoryLoadingSelector } from "../../store/category/category.selector"

import "./categories.styles.scss";

const Categories = () => {

  const categories = useSelector(categorySelector)
  const loading = useSelector(categoryLoadingSelector)

  return (
    <div>
      {
        loading ? <Spinner /> : (Object.keys(categories).map((title) => {
          const product = categories[title]
          return (
            <CategoryPreview key={title} title={title} products={product} />
          );
        }))
      }
    </div>
  );
};

export default Categories;
