import { styled } from "styled-components";

export const InfoStyles = styled.div`
  background: var(--purple-900, #2a0d44);
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  display: flex;
  color: var(--off-white, #fefefe);
  position : relative;
  h3 {
    text-align: center;
    font-family: DM Sans;
    font-weight: 700;
    line-height: 1.5rem;
    font-size: 0.6875rem;
  }
  @media screen and (min-width: 728px) {
    h3 {
      font-size: 1rem;
    }
  }
`;
