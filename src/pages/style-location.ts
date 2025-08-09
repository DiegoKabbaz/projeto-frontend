import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
  padding: 2rem;
  font-family: sans-serif;
`

export const Title = styled.h1`
  text-align: center;
  color: #f90;
`

export const CardList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  color: black;
`

export const Card = styled(Link)`
  display: block;
  width: 16rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background: white;
  text-decoration: none;
  color: inherit;
  transition: 0.2s ease;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }

  strong {
    display: block;
    margin-bottom: 0.25rem;
  }

  p {
    display: block;
    color: #666;
    font-weight: bold;
  }

  span {
    color: #666;
    font-weight: normal;
  }
`