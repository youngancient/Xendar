import { styled } from "styled-components";

export const ContactStyles = styled.div`
  border: 2px solid #000;
  .main {
    display: flex;
  }
  form {
    padding: 1rem;
    width: 100%;
  }
  .form-ele{
    display: flex;
    flex-direction: column;
    gap : 0.75rem;
  }
  @media screen and (min-width: 490px) {
    form {
      padding: 2rem;
    }
    .img img {
      border-radius: 1.5rem 0rem 0rem 1.5rem;
    }
    .img,
    form {
      border: 2px solid #000;
      width: 50%;
      display: flex;
      justify-content: center;
    }
    form {
      flex-direction: column;
      border-radius: 0rem 1.5rem 1.5rem 0rem;
      background: var(--off-white, #fefefe);
    }
  }
  @media screen and (min-width: 998px) {
    form {
      padding: 4rem;
    }
  }
`;

export const FormLabelStyles = styled.div`
  color: var(--grey-500, #525252);
  font-size: 0.875rem;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
`;
export const InputStyles = styled.div`
  padding: 0.75rem 1rem;
`;
export const TextareaStyles = styled.div`
  textarea{
    padding: 0.75rem 1rem;
    height: 10rem;
    width: 100%;
    outline: 0;
    border: none;                                         
  }
  textarea::-webkit-scrollbar {
    display: none;
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
