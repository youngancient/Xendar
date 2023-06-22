import { styled } from "styled-components";

export const SearchStyle = styled.div`
  display: flex;
  position : relative;
  input {
    border-radius: 8px;
    border: 1px solid var(--grey-300, #979797);
    display: flex;
    width: 10rem;
    padding: 0.5rem 2rem;
    height: 2.5rem;
    align-items: flex-start;
    color: var(--grey-300, #979797);
    font-size: 1rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--grey-300, #979797);
    font-size: 1rem;
    font-family: DM Sans;
    line-height: 1.5rem;
    opacity: 1; 
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--grey-300, #979797);
    font-size: 1rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--grey-300, #979797);
    font-size: 1rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }
  @media screen and (min-width: 998px) {
    input{
      width: 20rem;
    }
  }
`;
