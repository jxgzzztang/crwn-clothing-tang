import { useNavigate } from "react-router-dom"

import { CategoryBodyContainer, CategoryContainer, BackgroundImage } from "./category-item.styles";

const CategoryItem = ({ category: { title, imageUrl, to } }) => {

  const navigate = useNavigate()

  const onNavigateHandle = () => navigate(to)

  return (
    <CategoryContainer onClick={onNavigateHandle}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>shopping</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
