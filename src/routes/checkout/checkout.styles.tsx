import styled from "styled-components"

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 50px auto 0px;
`

export const TitleBar = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`
export const TitleItem = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`
export const CheckoutTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`