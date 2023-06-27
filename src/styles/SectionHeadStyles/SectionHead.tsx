import { styled } from "styled-components";

export const SectionHeadStyles = styled.div`
  display: flex;
  flex-direction: column;
  justy-content : center;
  align-items : center;
  padding : 1rem;
  h3 {
    color: var(--grey-700, #272727);
    font-size: 1.5rem;
    line-height: 2rem;
    font-family: Raleway;
    font-weight: 700;
    text-align: center;
  }
  @media screen and (min-width: 728px) {
    margin-top: 1rem;
    padding : 0;
    h3 {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
  @media screen and (min-width: 998px) {
    margin-top: 2rem;
  }
`;
