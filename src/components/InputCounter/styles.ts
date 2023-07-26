import styled from "styled-components";

interface CounterContainerProps {
  height: number;
}

export const CounterContainer = styled.div<CounterContainerProps>`
  height: ${props => {
    return String(props.height) + 'rem'
  }};

  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

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