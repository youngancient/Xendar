import { styled } from "styled-components";

export const CourseCardStyles = styled.div`
  border-radius: 11.774px;
  background: var(--white, #fff);
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.20);
  .img{
    border-radius: 11.774px 11.774px 0px 0px;
  }
  .content {
    padding: 0.375rem 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .prices {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .icons {
    font-family: Poppins;
    display: flex;
    justify-content: space-between;
  }
  .icons-inner {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
  .i {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }
  .emoji {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 8px;
    background: var(--background-white, #f5f5f5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h4 {
    color: var(--grey-500, #525252);
    font-size: 0.875rem;
    font-family: DM Sans;
    font-weight: 700;
    line-height: 1.5rem;
  }
  .prices span {
    color: var(--grey-300, #979797);
    font-size: 0.5rem;
    font-family: Poppins;
    line-height: 0.75rem;
  }
  .content-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .i span {
    color: var(--grey-400, #747474);
    font-size: 0.75rem;
    font-family: Poppins;
    line-height: 0.75rem;
    font-weight: 700;
  }
  hr {
    border: 0.046rem solid #e5d4f5;
  }
  @media screen and (min-width: 728px) {
    .content {
      padding: 0.75rem 1rem;
      gap: 0.75rem;
    }
    .emoji {
      width: 2rem;
      height: 2rem;
    }
    h4 {
      font-size: 1rem;
    }
    .prices span,
    .i span {
      font-size: 0.75rem;
      font-family: DM Sans;
      line-height: 1.5rem;
    }
    .icons {
      font-family: DM Sans;
    }
  }
`;
