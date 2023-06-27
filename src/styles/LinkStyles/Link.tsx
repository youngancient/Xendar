import { css, styled } from "styled-components";

export interface ILink {
  color: string;
  $ispageactive: boolean;
}
export interface ILinkB {
  color: string;
  hovercolor ?: string;
}

export const PageLinkStyle = styled.p<ILink>`
  color: ${(props) => props.$ispageactive ? "var(--purple, #7d26cd)" : props.color};
  font-size: 0.875rem;
  font-family: DM Sans;
  font-weight: 600;
  line-height: 1.5rem;
  &:hover{
    color: var(--purple-600, #6820AB);
  }
  @media screen and (min-width: 728px) {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 2rem;
    height: 2.22713rem;
    ${(props) =>
      props.$ispageactive &&
      css`
        color: var(--purple, #7d26cd);
        border-bottom: 2px solid #7D26CD;
      `};
  }
`;

// other links
export const LinkStyle = styled.p<ILinkB>`
  color : ${props => props.color};
  font-size: 0.875rem;
  font-family: DM Sans;
  font-weight: 600;
  line-height: 1.5rem;
  width: fit-content;
  &:hover{
    color: var(--purple-600, #6820AB);
  }
  ${props => props.hovercolor && css`
    &:hover{
      color: ${props.hovercolor};
    }
  `}
  @media screen and (min-width: 728px) {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 2rem;
    height: 2.22713rem;
  }
`;
