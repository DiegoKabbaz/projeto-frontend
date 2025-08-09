import { Link } from 'react-router-dom'
import styled from 'styled-components'

 export const Headers = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: auto;
  padding: 1rem;
  background-color: #f5f5f5;

  span {
      color: #07a3d3;
      font-weight: bold;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
 
`
export const NavLink = styled(Link)`
  margin: 0 0.5rem;
  text-decoration: none;
  color: #07a3d3;

  &:hover {
  color: #097697;
    text-decoration: underline;
  }
`