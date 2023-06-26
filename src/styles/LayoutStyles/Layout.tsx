import { css, styled } from "styled-components";

export interface ILayout {
  $isNavOpen: boolean;
}
export const LayoutStyles = styled.div<ILayout>`
  @media screen and (max-width: 485px) {
    ${(props) =>
      props.$isNavOpen &&
      css`
        height: 100vh;
        overflow-y: hidden;
      `}
  }
`;
