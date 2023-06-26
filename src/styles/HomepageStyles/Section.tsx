import { styled } from "styled-components";

export const PaddedSectionStyle = styled.div`
  padding: 0 1rem 0 1rem;
  @media screen and (min-width: 728px) {
    padding: 0 1.5rem 0 1.5rem;
  }
  @media screen and (min-width: 820px) {
    padding: 0 2rem 0 2rem;
  }
  @media screen and (min-width: 998px) {
    padding: 4rem 4.5rem 4rem 4.5rem;
  }
`;

export const ActualPaddedSectionStyle = styled.div`
  padding: 2.5rem 1rem 2.5rem 1rem;
  @media screen and (min-width: 728px) {
    padding: 2rem 1.5rem 2rem 1.5rem;
  }
  @media screen and (min-width: 820px) {
    padding: 2rem 2rem 2rem 2rem;
  }
  @media screen and (min-width: 998px) {
    padding: 4rem 4.5rem 4rem 4.5rem;
  }
`;
