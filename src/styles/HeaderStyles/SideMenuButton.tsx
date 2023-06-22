import { styled } from "styled-components";

export const SideMenuButtonStyle = styled.button`
  display: flex;
  align-items : center;
  gap: 0.75rem;
  outline : 0;
  background : transparent;
  p {
    color: var(--grey-500, #525252);
    font-size: 0.875rem;
    font-family: DM Sans;
    font-weight : 600;
    line-height: 1.5rem;
  }
  .count {
    border-radius: 16.667px;
    background: var(--red, #d92d20);
    display: flex;
    width: 1rem;
    height: 1rem;
    padding: 0.125rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .count span {
    color: #fff;
    text-align: center;
    font-size: 0.625rem;
    font-family: Poppins;
    font-weight: 700;
    line-height: 0.41669rem;
  }
`;
