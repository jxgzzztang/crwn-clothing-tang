export enum CATEGORIES_ACTION_TYPE {
  CHANGE_CATEGORIES_SUCCESS = "category/CHANGE_CATEGORIES_SUCCESS",
  CHANGE_CATEGORIES_START = "category/CHANGE_CATEGORIES_START",
  CHANGE_CATEGORIES_FAIL = "category/CHANGE_CATEGORIES_FAIL"
}

export type Category = {
  readonly categories: CategoryItem[],
  readonly error: null | Error,
  readonly loading: boolean
}

export type Item = {
  id: number
  imageUrl: string
  name: string
  price: number
}

export type CategoryItem = {
  items: Item[],
  title: string
}

export type Categories = {
  [key: string]: any
}