import { styled } from "styled-components";

export const MarginStyle = styled.div`
  margin-top: 0rem;
  h3 {
    color: var(--grey-700, #272727);
    font-size: 1.5rem;
    font-family: Raleway;
    font-weight: 700;
    line-height: 2rem;
  }
  h3 .sh{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sh span{
    color: var(--purple, #7d26cd);
  }
  @media screen and (min-width: 728px) {
    margin-top: 2rem;
    h3 {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
`;
export const CourseCatalogStyles = styled.div`
  margin-top: 2rem;
  .info {
    margin-top: 1rem;
  }
  .info p {
    color: #525252;
    font-size: 1rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }
  .info strong {
    color: #7d26cd;
  }
  .group {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 1rem;
    // min-height: 35vh;
  }
  @media screen and (max-width: 360px) {
    .group {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  @media screen and (min-width: 390px) and (max-width: 490px) {
    .group {
      justify-content: space-evenly;
    }
  }
  @media screen and (min-width: 490px) {
  
    .group {
      margin-top: 1.5rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(168px, 100%), 1fr));
      gap: 1.5rem;
    }
    .group img{
      width: 100%;
      height: 105px
    }
  }
  @media screen and (min-width: 728px) {
    .group img{
      width: 100%;
      height: 140px
    }
    .group {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(230px, 100%), 1fr));
      gap: 1.5rem;
    }
  }
  @media screen and (min-width: 998px) {
    .group img{
      width: 100%;
      height: 240px
    }
    .group{
      grid-template-columns: repeat(auto-fill, minmax(min(330px, 100%), 1fr));
    }
  }
`;