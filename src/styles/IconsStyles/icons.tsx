import { styled } from "styled-components";

export interface IHover {
  onMouseHover?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
}

export const IconStyle = styled.button<IHover>`
  background: transparent;
  cursor: pointer;
  position: relative;
  .value {
    display: flex;
    min-width: 16px;
    width: fit-content;
    min-height: 16px;
    padding: 0.125rem 0 0 0;
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
  z-index: 1;
  left: 0.65rem;
  top: 0.75rem;
  @media screen and (min-width: 490px){
    top: 30%;
  }
  @media screen and (min-width: 500px) and (max-width: 550px) {
    left: 20%;
  }
  @media screen and (min-width: 550px) and (max-width: 620px) {
    left: 22%;
  }
  @media screen and (min-width: 620px) and (max-width: 680px) {
    left: 26%;
  }
  @media screen and (min-width: 680px) and (max-width: 727px) {
    left: 29%;
  }
`;
export const MagnifyingGlassStyle = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 0.75rem;
`;
export const NavMagnifyingGlassStyle = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 0.65rem;
`;

export const ContactSvgStyle = styled.div`
  display: flex;
  width: 5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  background: var(--purple-100, #e5d4f5);
`;

export const LogoStyle = styled.div`
  width: 82px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Raleway;
  font-weight: 300;
  font-size: 0.95rem;
  color: rgba(42, 13, 68,0.75);
  strong{
    color: #7d26cd;
    opacity: 1;
    font-weight: 800;
    font-size: 1.8rem;
  }
`
export const FooterLogoStyle = styled.div`
  width: 82px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Raleway;
  font-weight: 300;
  font-size: 0.95rem;
  color: #F9F7F7;
  strong{
    color: #7d26cd;
    opacity: 1;
    font-weight: 800;
    font-size: 1.8rem;
  }
`