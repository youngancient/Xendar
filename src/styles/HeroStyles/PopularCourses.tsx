import { styled } from "styled-components";

export const PopularCoursesStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  .inner {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  @media screen and (min-width: 728px) {
    .inner {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
  @media screen and (min-width: 998px) {
    .inner {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
`;
