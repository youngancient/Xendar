import { styled } from "styled-components";
import { SearchStyle } from "../HeaderStyles/Search";

export const HeroSearchStyles = styled(SearchStyle)`
  display: flex;
  flex-direction: column;
  margin-top : 1.5rem;
  input {
    border-radius: 8px;
    width: 100%;
    height : 2.8rem;
    padding: 1.2rem 2.2rem;
  }
  gap : 0.5rem;
  @media screen and (min-width: 728px) {
    flex-direction: row;
    align-items: center;
    gap : 0rem;
    input {
      width: 14rem;
      border-radius: 8px 0px 0px 8px;
      height: 2.85rem;
    }
    margin-top : 1rem;
  }
  @media screen and (min-width: 810px) {
    input{
        width : 15rem;
    }
  }
  @media screen and (min-width: 998px) {
    input {
      width: 20rem;
      height : 3rem;
    }
    margin-top : 2.5rem;
  }
`;

export const HeroSearchButton = styled.button`
  background: var(--purple, #7d26cd);
  box-shadow: 0px 4px 8px 0px rgba(125, 38, 205, 0.3);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: var(--off-white, #fefefe);
  font-size: 1rem;
  font-family: DM Sans;
  font-weight: 700;
  line-height: 1.5rem;
  @media screen and (min-width: 728px) {
    border-radius: 0px 8px 8px 0px;
  }
`;
