import { styled } from "styled-components";

export const StatStyles = styled.div`
  margin-top: 2.5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .short {
    gap: 2rem;
    display: flex;
    flex-direction: column;
    // align-items: center;
  }
  h4 {
    color: var(--purple, #7d26cd);
    text-align: center;
    font-size: 2.25rem;
    font-family: Raleway;
    font-weight: 700;
    line-height: 3rem;
  }
  p {
    color: var(--grey-700, #272727);
    text-align: center;
    font-size: 0.875rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }
  .one {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  hr{
    display : none;
  }
  @media screen and (min-width: 728px) {
    padding: 2rem;
    margin-top: 1rem;
    .short {
      gap: 0rem;
      flex-direction: row;
      justify-content: space-evenly;
      width: 100%;
    }
    hr {
        display : block;
      border: 0.0625rem solid #d4b7ee;
    }
    h4 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.25rem;
      line-height: 2rem;
    }
  }
  @media screen and (min-width: 998px) {
    margin-top: 2.5rem;
  }
`;
