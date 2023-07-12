import { css, styled } from "styled-components";
import { XtraSmall } from "../SectionHeadStyles/Small";

export const ContactStyles = styled.div`
  // border: 2px solid #000;
  .main {
    display: flex;
  }
  form {
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 1rem;
    background: var(--off-white, #fefefe);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.05);
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .form-ele {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  @media screen and (min-width: 490px) and (max-width: 728px) {
    form {
      width: 80%;
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 728px) {
    .main {
      border-radius: 0rem 1.5rem 1.5rem 0rem;
    }
    .img img {
      border-radius: 1.5rem 0rem 0rem 1.5rem;
    }
    .img,
    form {
      width: 50%;
      display: flex;
      justify-content: center;
    }
    form {
      flex-direction: column;
      border-radius: 0rem 1.5rem 1.5rem 0rem;
      // background: var(--off-white, #fefefe);
      box-shadow: none;
      padding: 2rem;
    }
  }
  @media screen and (min-width: 998px) {
    form {
      padding: 4rem;
    }
  }
`;

export interface IFormLabel {
  color?: string;
}
export const FormLabelStyles = styled.div<IFormLabel>`
  color: ${(props) => (props.color ? props.color : "var(--grey-500, #525252)")};
  font-size: 0.875rem;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
`;
interface IMaskInput {
  placeholderfont?: string;
}
export const InputStyles = styled.div<IMaskInput>`
  input {
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--grey-200, #bababa);
    color: var(--grey-500, #525252);
    font-size: 1rem;
    font-family: DM Sans;
    line-height: 1.5rem;
    width: 100%;
  }
  input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--grey-300, #979797);
    font-size: 1rem;
    font-family: DM Sans;
    ${(props) =>
      props.placeholderfont &&
      css`
        font-family: verdana;
        font-size: 2rem;
      `};
    line-height: 1.5rem;
    opacity: 1;
  }

  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--grey-300, #979797);
    font-size: 1rem;
    font-family: DM Sans;
    line-height: 1.5rem;
    ${(props) =>
      props.placeholderfont &&
      css`
        font-family: verdana;
        font-size: 2rem;
      `}
  }

  input::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--grey-300, #979797);
    font-size: 1rem;
    font-family: DM Sans;
    line-height: 1.5rem;
    ${(props) =>
      props.placeholderfont &&
      css`
        font-family: verdana;
        font-size: 2rem;
      `}
  }
  input:focus {
    border: 1px solid var(--grey-500, #525252);
  }
`;
export const TextareaStyles = styled.div`
  textarea {
    padding: 0.75rem 1rem;
    height: 10rem;
    width: 100%;
    outline: 0;
    border: none;
    border-radius: 0.5rem;
    border: 1px solid var(--grey-200, #bababa);
    color: var(--grey-500, #525252);
    font-size: 1rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }
  textarea::-webkit-scrollbar {
    display: none;
  }
  textarea::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--grey-300, #979797);
    font-size: 1rem;
    font-family: DM Sans;
    line-height: 1.5rem;
    opacity: 1;
  }

  textarea:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--grey-300, #979797);
    font-size: 1rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }

  textarea::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--grey-300, #979797);
    font-size: 1rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }
  textarea:focus {
    border: 1px solid var(--grey-500, #525252);
  }
`;
export const ReachoutStyles = styled.div`
  margin-top: 1rem;
  .contacts {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media screen and (min-width: 490px) {
    .contacts {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
  }
`;

export const ErrorStyles = styled(XtraSmall)`
  color: red;
  text-align: left;
  padding-left: 0.25rem;
`;
export const CenterErrorForMinitab = styled(ErrorStyles)`
  @media screen and (min-width: 490px) and (max-width: 720px) {
    text-align: center;
  }
`;

export const FormBtnStyles = styled.button`
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 0.5rem;
  background: ${(props )=> props.disabled ? "hsla(271, 69%, 48%,0.7)": "var(--purple, #7d26cd)" };
  box-shadow: 0px 4px 8px 0px rgba(125, 38, 205, 0.3);
  color: var(--off-white, #fefefe);
  font-size: 1rem;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  width: 100%;
  &:hover {
    background: var(--purple-600, #6820ab);
  }
`;
export const TransparentFormBtnStyles = styled.button`
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 0.5rem;
  background: var(--white, #fff);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
  border: 2px solid #fff;
  color: var(--purple, #7d26cd);
  font-size: 1rem;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  width: 100%;
  &:hover {
    border: 2px solid var(--purple-600, #6820ab);
    color: var(--purple-600, #6820ab);
  }
  ${(props )=> props.disabled && css`
    background: hsla(0,0%,60%,0.1);
    box-shadow: none;                 
    border: 2px solid var(--purple-600, #6820ab);                    
  `};
`;
export interface IContactBtn {
  $submitted: boolean;
}
export const ContactPageBtnStyles = styled(FormBtnStyles)<IContactBtn>`
  background: ${(props) =>
    props.$submitted ? "hsla(271, 69%, 48%,0.7)" : "var(--purple, #7d26cd)"};
  gap: 0.5rem;
  ${(props) =>
    props.$submitted &&
    css`
      &:hover {
        background: hsla(271, 69%, 48%, 0.7);
      }
    `}
`;

export const SmallsvgStyles = styled.div`
  width: 1rem;
  height: 1rem;
  svg {
    fill: #fff;
  }
`;

export const ReachoutCompStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  border-radius: 1rem;
  background: var(--off-white, #fefefe);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  .ct {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
  }
  h4 {
    color: var(--grey-700, #272727);
    font-size: 1.5rem;
    font-family: Raleway;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
  }
  @media screen and (min-width: 490px) {
    width: 50%;
  }
  @media screen and (min-width: 728px) {
    width: 33.3%;
    .ct {
      width: 100%;
    }
  }
  @media screen and (min-width: 998px) {
    width: 30%;
    .ct {
      width: 45%;
    }
  }
`;
