import { styled } from "styled-components";

export interface ILink {
  color: string;
}

export const LinkStyle = styled.p<ILink>`
  color: ${(props) => props.color};
  font-size: 0.875rem;
  font-family: DM Sans;
  font-weight: 600;
  line-height: 1.5rem;

  @media screen and (min-width: 728px) {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 2rem;
  }
`;
