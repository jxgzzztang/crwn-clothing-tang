import styled from "styled-components"

export const CategoriesPreviewContainer = styled.div`
  padding-bottom: 20px;

  h2 {
    padding-bottom: 20px;
  }
`

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`