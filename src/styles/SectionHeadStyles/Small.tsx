import { styled } from "styled-components";

export const SmallStyles = styled.h5`
  color: var(--grey-500, #525252);
  font-size: 0.875rem;
  font-family: DM Sans;
  line-height: 1.5rem;
  text-align : center;
  margin-top : 1rem;
  @media screen and (min-width: 728px) {
    width: 80%;
  }
  @media screen and (min-width: 998px) {
    font-size: 1rem;
    margin-top : 2rem;
    width: 75%;
  }
`;
