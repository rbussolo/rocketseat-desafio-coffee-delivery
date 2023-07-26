import { styled } from "styled-components"
import { BaseContainer, BaseHeader } from "../styles"

export const AddressContainer = styled(BaseContainer)``

export const AddressHeader = styled(BaseHeader)`
  svg {
    color: ${props => props.theme["yellow-700"]};
  }
`

export const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InputRow = styled.div`
  display: flex;
  gap: 0.75rem;
`