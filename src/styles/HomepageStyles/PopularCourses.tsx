import { styled } from "styled-components";

export const PopularCoursesStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  .inner {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .pad{
    padding: 1rem;
    width: 100%;
    margin-bottom : 2rem;
  }
  .a {
    display: flex;
    padding: 0.75rem 2rem;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 0.1px solid var(--purple, #7d26cd);
    background: var(--white, #fff);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    width: 100%;
  }
  @media screen and (min-width: 728px) {
    .inner {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    .pad{
      width :auto;
      padding: 0;
    }
    .a{
      width :auto;
    }
  }
  @media screen and (min-width: 998px) {
    .inner {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
`;
