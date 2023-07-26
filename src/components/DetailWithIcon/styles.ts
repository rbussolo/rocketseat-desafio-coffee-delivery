import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .icon {
    color: ${props => props.theme["gray-100"]};
    border-radius: 9999px;
    padding: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .purple {
    background-color: ${props => props.theme["purple-500"]};
  }

  .yellow {
    background-color: ${props => props.theme["yellow-500"]};
  }

  .dark-yellow {
    background-color: ${props => props.theme["yellow-700"]};
  }

  .dark-gray {
    background-color: ${props => props.theme["gray-700"]};
  }
`;