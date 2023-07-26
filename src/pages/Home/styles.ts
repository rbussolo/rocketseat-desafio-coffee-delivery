import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductContainer = styled.main`
  padding-top: 2rem;
  padding-bottom: 2rem;

  h1 {
    color: ${props => props.theme["gray-800"]};
    font-size: 2rem;
    font-weight: bolder;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
  }
`

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;

  margin-top: 3.5rem;
`;

