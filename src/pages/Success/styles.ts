import styled from "styled-components";

export const SuccessContainer = styled.div`
  margin-top: 5rem;

  h1 {
    color: ${props => props.theme["yellow-700"]};
    font-size: 2rem;
    font-weight: bolder;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.3;
  }

  > div {
    margin-top: 2.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const DetailContainer = styled.div`
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: linear-gradient(${props => props.theme["gray-100"]}, ${props => props.theme["gray-100"]}) padding-box,
              linear-gradient(to right, ${props => props.theme["yellow-500"]}, ${props => props.theme["purple-500"]}) border-box;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid transparent;
`;