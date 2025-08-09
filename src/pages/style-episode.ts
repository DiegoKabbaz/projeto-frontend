
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  font-family: sans-serif;
`

export const Grid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
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
  color: black;

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

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
export const Title = styled.h1`
  text-align: center;
  color: '#f90'

`