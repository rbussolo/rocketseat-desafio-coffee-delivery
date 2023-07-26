import { styled } from "styled-components";

export const ProductContainer = styled.div`
  background-color: ${props => props.theme["gray-200"]};
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  padding: 1.25rem;

  img {
    margin-top: -2.5rem;
  }

  div.details span {
    color: ${props => props.theme["yellow-700"]};
    background-color: ${props => props.theme["yellow-300"]};
    
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: bold;
    line-height: 1.3;

    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }

  h1 {
    color: ${props => props.theme["gray-800"]};
    font-size: 1.25rem;
    font-weight: bold;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
  }

  p {
    color: ${props => props.theme["gray-600"]};
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
  }
`;

export const ProductCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 0.25rem;
`

export const ProductPrice = styled.span`
  color: ${props => props.theme["gray-700"]};
  font-size: 0.875rem;
  line-height: 1.3;

  b {
    font-size: 1.5rem;
  }
`

export const ProductForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const AddCartButton = styled.button`
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 6px;

  color: ${props => props.theme["gray-100"]};
  background-color: ${props => props.theme["purple-700"]};

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme["purple-500"]};
  }
`