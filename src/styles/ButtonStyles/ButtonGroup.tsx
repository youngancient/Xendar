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
  overflow-x: scroll;
  // width: 150%;
  &::-webkit-scrollbar {
    display: none;
  }
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
  width: fit-content;
  align-items: center;
  color: var(--grey-500, #525252);
  font-size: 0.875rem;
  font-family: DM Sans;
  white-space: nowrap;
  line-height: 1.5rem;
  &:hover {
    background: var(--purple-100, #e5d4f5);
    box-shadow: 0px 0px 2px 1px rgba(125, 38, 205, 0.3);
  }
`;
export const CancelSearchBtnStyles = styled.button<IButton>`
  border-radius: 8px;
  background: var(--purple-25, #f9f8fb);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 0.25rem 1rem;
  justify-content: center;
  width: fit-content;
  align-items: center;
  color: var(--grey-500, #525252);
  font-size: 0.875rem;
  font-family: DM Sans;
  white-space: nowrap;
  line-height: 1.5rem;
  gap: 0.25rem;
  &:hover {
    background: var(--purple-100, #e5d4f5);
    box-shadow: 0px 0px 2px 1px rgba(125, 38, 205, 0.3);
  }
`;

export const ContactBtnStyles = styled.button<IButton>`
  display: flex;
  color: var(--purple, #7d26cd);
  font-size: 1rem;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  background: transparent;
`;

export const TransparentFormBtnStyles = styled.button`
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
  color: var(--purple, #7d26cd);
  font-size: 1rem;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  width: 100%;
  &:hover {
    color: var(--purple-600, #6820ab);
    border: 2px solid var(--purple-600, #6820ab);  
  }
  ${(props )=> props.disabled && css`
    box-shadow: none;                 
    background: hsla(0,0%,60%,0.1);
    border: 2px solid var(--purple-600, #6820ab);                    
  `};
`;