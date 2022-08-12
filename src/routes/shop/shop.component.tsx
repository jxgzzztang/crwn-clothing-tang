import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Routes, Route } from "react-router-dom"

import Categories from "../categories/categories.component";
import Category from "../category/category.component";

import { changeCategoriesStartACtion } from "../../store/category/category.action"

import "./shop.styles.scss";

const Shop = () => {

  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(changeCategoriesStartACtion())
  }, [dispatch])

  return (
    <Routes>
      <Route index element={<Categories/>}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  )
};

export default Shop;
