import styled from "styled-components"

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0px;
  font-size: 20px;
  -webkit-box-align: center;
  align-items: center;

  .checkout-price {
    width: 23%;
  }

  .checkout-clear {
    cursor: pointer;
  }

  .checkout-name {
    width: 25%;
  }

`
export const ImageBox = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const CheckoutQuantity = styled.div`
  display: flex;
  width: 25%;

  .checkout-quantity-num {
    padding: 0 10px;
  }

  .symbol {
    cursor: pointer;
  }
`