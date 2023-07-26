import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const LocationAndCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  font-size: 0.875rem;
  color: ${props => props.theme["purple-700"]};
  background-color: ${props => props.theme["purple-300"]};

  svg {
    width: 1.375rem;
    height: 1.375rem;

    color: ${props => props.theme["purple-500"]}
  }
`

export const CartContainer = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;

  color: ${props => props.theme["yellow-700"]};
  background-color: ${props => props.theme["yellow-300"]};

  position: relative;

  span {
    color: ${props => props.theme["yellow-300"]};
    background-color: ${props => props.theme["yellow-700"]};

    font-size: 0.75rem;

    width: 1.25rem;
    height: 1.25rem;

    border-radius: 9999px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;

    right: -0.5rem;
    top: -0.5rem;
  }

  &:hover {
    color: ${props => props.theme["yellow-300"]};
    background-color: ${props => props.theme["yellow-700"]};

    span {
      color: ${props => props.theme["yellow-700"]};
      background-color: ${props => props.theme["yellow-300"]};
    }
  }

  
`