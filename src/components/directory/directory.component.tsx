import { FC } from "react";
import CategoryItem from "../category-item/category-item.component";

import { DirectoryContainer } from "./directory.styles";

export type CategoryType = {
  id: number;
  title: string;
  imageUrl: string;
  to: string;
};

export type DirectoryPropsType = {
  categories: CategoryType[];
};

const Directory: FC<DirectoryPropsType> = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
