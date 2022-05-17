import { Routes, Route } from "react-router-dom"

import Categories from "../categories/categories.component";
import Category from "../category/category.component";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<Categories/>}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  )
};

export default Shop;
