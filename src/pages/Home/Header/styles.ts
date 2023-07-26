import styled from "styled-components";

import imageBackground from '../../../assets/background-coffee-delivery.svg';

export const HeaderContainer = styled.header`
  height: 34rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  background-image: url(${imageBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  margin-left: -10rem;
  margin-right: -10rem;

  padding-left: 10rem;
  padding-right: 10rem;
`

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`;

export const ProductTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: bolder;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
    color: ${props => props.theme["gray-900"]};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${props => props.theme["gray-800"]};
  }
`;

const QUALITY_COLOR = {
  'yellow': 'yellow-500',
  'dark-yellow': 'yellow-700',
  'purple': 'purple-500',
  'gray': 'gray-700',
} as const;

interface QualityColor {
  qualitycolor: keyof typeof QUALITY_COLOR;
}

export const ProductQualities = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 1rem;
`;

export const ProductQuality = styled.span<QualityColor>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    color: ${props => props.theme["gray-100"]};
    background-color: ${props => props.theme[QUALITY_COLOR[props.qualitycolor]]};
    border-radius: 9999px;
    padding: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;