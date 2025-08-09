import styled from 'styled-components'

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

export const Title = styled.h1`
  text-align: center;
`

export const CharacterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 2rem;
  flex-wrap: wrap;
  gap: 16px;

`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    font-size: 1.5rem;
    margin: 0;
  }

  .status {
    font-weight: bold;
    color: green;
  }

  span {
    color: #555;
    font-size: 0.875rem;
  }

  strong {
    color: #222;
    font-size: 0.875rem;
  }
`

export const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 6px;
  object-fit: cover;
`

export const SectionTitle = styled.h3`
  text-align: center;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 16px;
  font-weight: bold;
  color: black;
`
