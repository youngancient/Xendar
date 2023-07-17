import { IFaqArrow } from "@/components/Icons/Icons";
import { css, styled } from "styled-components";
import { IButton } from "../ButtonStyles/ButtonGroup";

export const FaqStyles = styled.div`
  margin-top: 0.5rem;
  .faqs {
    padding: 3rem 0rem 2rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  @media screen and (min-width: 728px) {
    .faqs {
      padding: 1.5rem 0rem 1rem 0rem;
      margin-top : 2rem;
    }
  }
`;

// inherit the onclick type from the generic button
export interface IFaqComp extends IButton{
  $showAnswer : boolean;
}
export const FaqCompStyles = styled.div<IFaqComp>`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.03);
  cursor: pointer;
  width: 100%;
  gap: 0.75rem;
  h4 {
    color: var(--grey-700, #272727);
    font-size: 1rem;
    font-family: DM Sans;
    line-height: 1.5rem;
    cursor: pointer;
  }
  p {
    color: var(--grey-500, #525252);
    font-size: 0.875rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }
  .question {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (min-width: 728px) {
    padding: 1rem 2rem;
    width: 80%;
    gap: 1rem;
    h4 {
      line-height: 2rem;
      font-size: 1.25rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 998px) {
    width: 80%;
  }
`;

export const FaqArrowStyles = styled.div<IFaqArrow>`
  cursor: pointer;
  transition : 0.3s;
  ${(props) =>
    props.$showAnswer &&
    css`
      transform: rotateZ(180deg);
      transition : 0.3s;
    `}
`;
