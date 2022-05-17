import styled from "styled-components"

export const CategoryContainer = styled.div`
  h2 {
    text-align: center;
    font-size: 35px;
  }
`

export const CategoryProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`