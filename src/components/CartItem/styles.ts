import styled from "styled-components";
import { BaseButton } from "../../pages/Checkout/styles";

export const ItemContainer = styled.div`
  display:flex;
  justify-content: space-between;
`;

export const ItemDetail = styled.div`
  display: flex;
  align-items: center;

  height: 4rem;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const ItemForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ItemName = styled.span`
  color: ${props => props.theme["gray-800"]};
`

export const ItemAction = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ItemCounter = styled.div`
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  height: 2rem;
  background-color: ${props => props.theme["gray-400"]};
  border-radius: 6px;

  span {
    width: 1.25rem;
    height: 1rem;

    display: flex;
    justify-content: center;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    
    cursor: pointer;
    color: ${props => props.theme["purple-500"]};
    background-color: transparent;

    &:hover {
      color: ${props => props.theme["purple-700"]};
    }
  }
`

export const ItemPrice = styled.span`
  color: ${props => props.theme["gray-700"]};
  font-weight: bold;
`

export const RemoveItemButton = styled(BaseButton)`
  padding: 0 0.5rem;
  gap: 0.25rem;

  color: ${props => props.theme["gray-700"]};
`