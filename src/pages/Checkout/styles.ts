import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const MoreInfoContainer = styled.div`
  width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    color: ${props => props.theme["gray-800"]};

    font-size: 1.125rem;
    font-weight: bold;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
  }
`

export const BaseContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${props => props.theme["gray-200"]};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const BaseHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    > p {
      color: ${props => props.theme["gray-800"]};
      line-height: 1.3;
    }

    > span {
      color: ${props => props.theme["gray-700"]};
      font-size: 0.875rem;
      line-height: 1.3;
    }
  }
`

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  
  font-size: 0.75rem;

  background-color: ${props => props.theme["gray-400"]};
  
  border-radius: 6px;
  border: none;

  cursor: pointer;

  svg {
    color: ${props => props.theme["purple-500"]};
  }

  &:not(.isSelected):hover {
    background-color: ${props => props.theme["gray-500"]};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${props => props.theme['purple-500']};
  }

  &.isSelected {
    background-color: ${props => props.theme['purple-300']};
    box-shadow: 0 0 0 1px ${props => props.theme['purple-500']};
  }
`

export const PaymentButton = styled(BaseButton)`
  gap: 0.75rem;
  flex: 1;

  padding: 1rem;
`

export const ProductContainer = styled.div`
  width: 28rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    color: ${props => props.theme["gray-800"]};

    font-size: 1.125rem;
    font-weight: bold;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
  }
`;

export const CartContainer = styled.div`
  background-color: ${props => props.theme["gray-200"]};
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.5rem;

  hr {
    border: none;
    border-top: 1px solid ${props => props.theme["gray-400"]};
  }
`;

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

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span.small {
      color: ${props => props.theme["gray-700"]};
      font-size: 0.875rem;
    }

    span.medium {
      color: ${props => props.theme["gray-700"]};
      font-size: 1rem;
    }

    span.large {
      color: ${props => props.theme["gray-800"]};
      font-weight: bold;
      font-size: 1.125rem;
    }
  }
`

export const BuyingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  font-size: 0.875rem;
  padding: 0.75rem 0.5rem;
  border: none;
  border-radius: 6px;

  background-color: ${props => props.theme["yellow-500"]};
  color: ${props => props.theme.white};

  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:not(:disabled):hover {
    background-color: ${props => props.theme["yellow-700"]};
  }
`