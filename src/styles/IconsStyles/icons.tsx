import { styled } from "styled-components";

export interface IHover {
  onMouseHover ?: React.MouseEventHandler;
  onMouseLeave ?: React.MouseEventHandler;
}

export const IconStyle = styled.button<IHover>`
  background: transparent;
  cursor: pointer;
  position: relative;
  .value {
    display: flex;
    width: 16px;
    height: 16px;
    padding: 2px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16.667px;
    background: var(--red, #d92d20);
    position: absolute;
    right: -2px;
    top: -2.961px;
  }
  h6 {
    color: #fff;
    text-align: center;
    font-size: 0.625rem;
    font-family: Poppins;
    font-weight: 700;
    line-height: 0.41669rem;
  }
`;

export interface IMenu {
  onClick: React.MouseEventHandler;
}
export const MenuStyle = styled.button<IMenu>`
  background: transparent;
  cursor: pointer;
`;
export const HeroMagnifyingGlassStyle = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 0.75rem;
`;
export const NavMagnifyingGlassStyle = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 0.65rem;
`;
