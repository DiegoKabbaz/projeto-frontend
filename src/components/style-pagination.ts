import styled from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 24px 0;
  margin-left: 2rem;

`

export const Button = styled.button`
  background: transparent;
  border: 1px solid #e78606ff;
  color: #e78606ff;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  gap: 4px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #fff7e6;
  }
`

export const PageInfo = styled.span`
  font-weight: bold;
  color: #e78606ff;
  font-size: 16px;
`