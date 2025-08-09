import styled from "styled-components"

export const Container = styled.div`
  max-width: 1000px;
  margin: 32px auto;
  padding: 1rem;
`

export const BackButton = styled.button`
  background: transparent;
  border: none;
  color: #333;
  cursor: pointer;
`

export const CharacterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: black;


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

export const SectionTitle = styled.h3`
  text-align: center;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 16px;
  font-weight: bold;
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
`

export const CharacterImage = styled.img`
  width: 100%;
  height: auto;
`

export const Header = styled.div`
  padding: 12px;
  text-align: center;

  h2 {
    font-size: 1.125rem;
    color: black;
  }

  span {
    font-size: 0.875rem;
    color: #555;
  }

  strong {
    display: block;
    margin-top: 8px;
    font-size: 0.875rem;
    color: #777;
  }
`

export const Footer = styled.div`
  width: 17rem;
  margin: 0 auto;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;

  strong {
    font-size: 0.875rem;
    display: block;
    margin-bottom: 4px;
    color: #444;
  }

  span {
    font-size: 0.875rem;
    color: #666;
  }
`
export const Card = styled.div`
  width: 20rem;
  height: 39rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;


  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
`

export const Title = styled.h2`
  text-align: center;
`