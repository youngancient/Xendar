import { styled } from "styled-components";
import { DesktopMobile, TabOnly } from "../HeroStyles/Hero";

export const AboutHeroStyles = styled.div`
  margin-top: 1rem;
  .mobile-img {
    width: 100%;
    height: auto;
  }
  img {
    border-radius: 1.5rem;
  }
  .main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  h1 {
    text-align: center;
    font-size: 2rem;
    font-family: Raleway;
    font-weight: 700;
    line-height: 2.5rem;
    color: #272727;
  }
  .hero-p {
    color: var(--grey-500, #525252);
    text-align: center;
    font-family: DM Sans;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
  .action {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 strong {
    color: var(--purple, #7d26cd);
  }
  @media screen and (min-width: 728px) {
    position: relative;
    margin-top: 1.5rem;
    .behind {
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      background: var(--purple-100, #e5d4f5);
      border-radius: 1.5rem;
    }
    .behind {
      width: 350px;
      height: 250px;
    }
    .main {
      flex-direction: row;
      gap: 0rem;
      position: relative;
      z-index: 5;
    }
    .hero-img,
    .hero-text {
      width: 50%;
      display: flex;
    }
    .hero-text {
      flex-direction: column;
      gap: 0.75rem;
    }
    .hero-img {
      justify-content: center;
      align-items: center;
    }
    h1 {
      font-size: 2rem;
      line-height: 2.5rem;
      text-align: left;
      width: 95%;
    }
    .hero-p {
      text-align: left;
      font-size: 1.2rem;
      line-height: 1.5rem;
      margin-top: 0.5rem;
    }
    .action {
      justify-content: unset;
    }
  }
  @media screen and (min-width: 820px) {
    h1 {
      font-size: 2.2rem;
    }
  }
  @media screen and (min-width: 998px) {
    .behind {
      width: 32.35594rem;
      height: 25.15694rem;
    }
    h1 {
      font-size: 3.5rem;
      line-height: 4.5rem;
      width: 85%;
    }
    .hero-p {
      width: 90%;
    }
    .hero-text {
      gap: 2rem;
    }
  }
`;

export const SocialsCompStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .s-media {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    justify-content: space-between;
  }
  .a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6625rem 1.325rem;
    flex-direction: row;
    gap: 0.82813rem;
    border-radius: 0.6625rem;
    background: var(--off-white, #fefefe);
    box-shadow: 0px 0px 6.625000476837158px 0px rgba(0, 0, 0, 0.1);
  }
  .a-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .a:hover {
    background: var(--purple-100, #e5d4f5);
  }
  @media screen and (max-width: 490px) {
    svg {
      width: 26.432px;
      height: 26.5px;
    }
  }
  @media screen and (min-width: 490px) {
    .s-media {
      margin-top: 1rem;
      justify-content: center;
      gap: 2rem;
    }
    .a-link {
      gap: 1rem;
    }
  }
  @media screen and (min-width: 728px) {
    .s-media {
      margin-top: 2rem;
      gap: 4rem;
    }
    .a {
      padding: 1rem 2rem;
      gap: 1.25rem;
      border-radius: 1rem;
    }
    .a-link {
      gap: 1rem;
    }
  }
`;

export const TeamTabOnly = styled.div`
  .tab,
  .desktop {
    display: none;
  }
  @media screen and (min-width: 490px) {
    .mobile {
      display: none;
    }
    .tab {
      display: block;
    }
    .desktop {
      display: none;
    }
  }
  @media screen and (min-width: 998px) {
    .tab {
      display: none;
    }
    .desktop {
      display: block;
    }
  }
`;

// finish up the styles
export const TeamStyle = styled.div`
  margin-top: 1.5rem;
  .team{
    display: flex;
    flex-direction : column;
    gap: 4rem;
  }
  @media screen and (min-width: 490px) {
    .team {
      overflow-x: scroll;
      gap : 2.5rem;
      flex-direction: row;
    }
    .team::-webkit-scrollbar {
      display: none;
    }
    margin-top: 2rem;
  }
  @media screen and (min-width: 998px) {
    margin-top: 2.5rem;
    .team{
      gap : 4.5rem;
      justify-content: space-evenly;
    }
  }
`;
export const TeamMemberStyles = styled.div`
  .mobile-img {
    width: 100%;
    height: auto;
  }
  gap: 1rem;
  img {
    border-radius: 1rem;
  }
  h4 {
    color: var(--grey-700, #272727);
    font-size: 1.25rem;
    font-family: Raleway;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
  }
  .deet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.1rem;
  }
  @media screen and (min-width: 490px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 998px) {
  }
`;
