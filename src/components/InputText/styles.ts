import styled from "styled-components";

interface InputContainerProps {
  width: number | undefined;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;

  ${props => {
    return props.width ? `width: ${props.width}px;` : "flex: 1;"
  }}
  
  position: relative;

  input {
    height: 2.625rem;
    padding: 0.75rem;

    width: 100%;

    border-radius: 4px;
    border: 1px solid ${props => props.theme["gray-400"]};

    background-color: ${props => props.theme["gray-300"]};
    color: ${props => props.theme["gray-700"]};

    &:not(:placeholder-shown) + div,
    &:focus + div {
      display: none;
    }
  }

  > div {
    pointer-events: none;

    position: absolute;

    height: 2.625rem;
    padding: 0.75rem;
    width: 100%;

    display: flex;
    justify-content: space-between;

    label {
      color: ${props => props.theme["gray-600"]};
    }

    span {
      color: ${props => props.theme["gray-600"]};

      font-size: 0.75rem;
      font-style: italic;
      line-height: 1.6;
    }
  }
`;