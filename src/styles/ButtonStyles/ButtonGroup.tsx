import { css, styled } from "styled-components";

export interface IButton {
  onClick: React.MouseEventHandler;
}
export interface IFilterStyle extends IButton {
  $isSelected: boolean;
}

export const ButtonGroupStyles = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FilterButtonStyles = styled.button<IFilterStyle>`
  border-radius: 8px;
  background: var(--purple-25, #f9f8fb);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  ${(props) =>
    props.$isSelected &&
    css`
      background: var(--purple-100, #e5d4f5);
      box-shadow: 0px 0px 2px 0px rgba(125, 38, 205, 0.3);
    `}
  display: flex;
  padding: 0.25rem 1rem;
  justify-content: center;
  align-items: center;
  color: var(--grey-500, #525252);
  font-size: 0.875rem;
  font-family: DM Sans;
  line-height: 1.5rem;
  &:hover{
    background: 	hsla(271, 62%, 90%, 0.3);
    box-shadow: 0px 0px 2px 1px rgba(125, 38, 205, 0.3);
  }
`;
