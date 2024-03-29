import styled from "styled-components"
import { Link } from "react-router-dom"

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`

export const NavLogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
`

export const NavLinkContaier = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 20px 40px;
`