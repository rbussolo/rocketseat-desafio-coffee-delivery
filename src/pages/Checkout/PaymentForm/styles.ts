import { styled } from "styled-components"
import { BaseContainer, BaseHeader } from "../styles"

export const PaymentContainer = styled(BaseContainer)``

export const PaymentHeader = styled(BaseHeader)`
  svg {
    color: ${props => props.theme["purple-500"]};
  }
`

export const PaymentType = styled.div`
  display: flex;
  gap: 0.75rem;
`