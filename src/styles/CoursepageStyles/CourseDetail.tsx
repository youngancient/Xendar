import { styled } from "styled-components";
import { XtraSmall } from "../SectionHeadStyles/Small";
import { switchEleVariants } from "@/Animations/LandingPageVariants";
import { motion } from "framer-motion";

export const DetailNavStyles = styled.div`
  display: flex;
  align-items: center;
  p,
  strong {
    color: var(--grey-300, #979797);
    font-size: 0.75rem;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
  }
  strong {
    color: var(--grey-700, #272727);
  }
  @media screen and (min-width: 728px) {
    p,
    strong {
      font-size: 0.875rem;
    }
  }
`;

export const CourseDetailCompStyles = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 2rem;
  .minitab {
    display: none;
  }
  @media screen and (min-width: 490px) and (max-width: 728px) {
    .side {
      display: none;
    }
    .minitab {
      display: block;
    }
  }
  @media screen and (min-width: 728px) {
    gap: 1rem;
    .side {
      width: 40%;
    }
  }
  @media screen and (min-width: 998px) {
    gap: 2rem;
    .side {
      width: 30%;
    }
  }
`;
export const MainCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  .deets {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .deet-one {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .deet-ele {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }
  .prices {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  .name {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
  }
  .btns {
    margin-top: 1rem;
  }
  .prices h6 {
    color: var(--grey-700, #272727);
    font-size: 1rem;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
  }
  .emojix {
    position: relative;
  }
  .msg {
    position: absolute;
    top: -130%;
    left: -120%;
    width: 75px;
    border-radius: 8px;
    background: var(--off-white, #fefefe);
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .msg span {
    color: var(--grey-500, #525252);
    font-size: 0.5rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }
  .btns {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .switch-elements-mobile {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  @media screen and (min-width: 490px) {
    gap: 1rem;
    .deets {
      gap: 1.5rem;
      flex-direction: row;
    }
    .deet-one {
      justify-content: unset;
      width: auto;
      gap: 1.5rem;
    }
    .nav-switch-cont {
      margin-top: 2rem;
    }
    .details-nav-switch {
      display: flex;
      justify-content: space-between;
    }
    .switch-elements {
      margin-top: 1.5rem;
    }
  }
  @media screen and (min-width: 490px) and (max-width: 728px) {
    .deets {
      gap: 1rem;
    }
    .deet-one {
      gap: 1rem;
    }
    .btns {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  }
  @media screen and (min-width: 490px) and (max-width: 998px) {
    .nav-switch-cont {
      width: 100%;
      overflow-x: scroll;
    }
    .details-nav-switch {
      width: 150%;
    }
  }
  @media screen and (min-width: 728px) {
    padding: 1rem;
    width: 60%;
    border-radius: 1rem;
    background: var(--off-white, #fefefe);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
    .deets {
      gap: 1rem;
      flex-wrap: wrap;
    }
    .deet-one {
      gap: 1rem;
    }
    .deet-ele p {
      margin-top: 2px;
    }
  }
  @media screen and (min-width: 998px) {
    padding: 2rem;
    width: 70%;
    .deets {
      gap: 2.5rem;
    }
    .deet-one {
      justify-content: unset;
      width: auto;
      gap: 2.5rem;
    }
  }
`;
export const SideCardStyles = styled.div`
  @media screen and (min-width: 728px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    img {
      border-radius: 0.5rem;
    }
    .deet-ele {
      display: flex;
      gap: 0.25rem;
      align-items: center;
    }
    .name,
    .btns {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    .name .inner {
      display: flex;
      gap: 0.75rem;
      position: relative;
      // border: 2px solid #000;
    }
    .name-r {
      max-width: 80%;
    }
    .prices {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    .prices h6 {
      color: var(--grey-700, #272727);
      font-size: 1rem;
      font-family: DM Sans;
      font-style: normal;
      font-weight: 700;
      line-height: 2rem;
    }
    .like {
      position: relative;
      display: flex;
      align-items: center;
      height: fit-content;
    }
    .msg {
      position: absolute;
      width: 75px;
      border-radius: 8px;
      background: var(--off-white, #fefefe);
      z-index: 20;
      box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .msg span {
      color: var(--grey-500, #525252);
      font-size: 0.75rem;
      font-family: DM Sans;
      line-height: 1.5rem;
    }
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    border-radius: 1rem;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
    .link {
      color: var(--purple, #7d26cd);
      text-decoration: underline;
    }
    .link:hover {
      text-decoration: none;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .prices h6 {
      font-size: 1.25rem;
    }
    .msg {
      width: 110px;
      padding: 1px;
      top: -90%;
      left: 40%;
    }
    .msg span {
      font-size: 0.75rem;
    }
    .msg {
      top: -70%;
      left: -120%;
    }
  }

  @media screen and (min-width: 998px) {
    padding: 1rem;
    .msg {
      top: -100%;
      left: -100%;
    }
    .btns {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

interface IVarDetails {
  color?: string;
  fontWeight?: number;
}
export const DetailSmallStyles = styled.p<IVarDetails>`
  color: ${(props) => (props.color ? props.color : "var(--grey-400, #747474)")};
  font-size: 0.875rem;
  font-family: DM Sans;
  font-style: normal;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  line-height: 1.5rem;
  @media screen and (min-width: 728px) {
    font-size: 1rem;
  }
`;
export const DrawerHeadStyles = styled.p<IVarDetails>`
  color: ${(props) => (props.color ? props.color : "var(--grey-400, #747474)")};
  font-size: 0.875rem;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  @media screen and (min-width: 728px) {
    font-size: 1rem;
  }
`;

export const DetailH3Styles = styled.h3`
  color: var(--grey-700, #272727);
  font-size: 1.25rem;
  font-family: Raleway;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem;
  @media screen and (min-width: 728px) {
    font-size: 1.5rem;
  }
`;
export const DetailHeadStyles = styled.h3`
  color: var(--grey-700, #272727);
  font-size: 1.25rem;
  font-family: Raleway;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem;
  @media screen and (min-width: 728px) {
    font-size: 1.25rem;
  }
`;

export const OverviewStyles = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate: "final",
  exit: "exit",
  variants: switchEleVariants,
}))`
  @media screen and (min-width: 490px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .one {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      row-gap: 0.75rem;
      color: #747474;
    }
    .skills .li {
      width: 50%;
    }
    ul {
      padding: 0rem 1rem 0rem 1.5rem;
    }
  }
  @media screen and (min-width: 998px) {
  }
`;
export const DrawerStyles = styled.div`
  .drawer-control {
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 0.5rem 1rem;
    justify-content: space-between;
    border-radius: 0.5rem;
    background: var(--mains-off-white, #fefefe);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
  }
  .mom {
    overflow-y: hidden;
  }
  .children {
    display: inline-flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem 1rem;
  }
`;

export const ListCompStyles = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 0.75rem;
  padding: 0rem 1.25rem;
  color: #747474;
`;
export const HeightControlStyles = styled.div`
  min-height: 500px;
  @media screen and (min-width: 728px) {
    min-height: 570px;
  }
  @media screen and (min-width: 820px) {
    min-height: 550px;
  }
  @media screen and (min-width: 998px) {
    min-height: 400px;
  }
`;
export const SyllabusStyles = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate: "final",
  exit: "exit",
  variants: switchEleVariants,
}))`
  @media screen and (min-width: 490px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
export const RequirementStyles = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate: "final",
  exit: "exit",
  variants: switchEleVariants,
}))`
  @media screen and (min-width: 490px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
export const TutorsStyles = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate: "final",
  exit: "exit",
  variants: switchEleVariants,
}))`
  @media screen and (min-width: 490px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
export const TutorListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  img {
    border-radius: 6.25rem;
  }
  .tutor {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  span {
    color: var(--grey-300, #979797);
    font-family: DM Sans;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
  }
  .tutor-deet {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  @media screen and (min-width: 490px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;


interface ITutorHeadStyle{
  fontSize ?: string;
  color ?: string;
  fontWeight ?: number;
}
export const TutorHeadStyle = styled.h5<ITutorHeadStyle>`
color: ${props => props.color ? props.color : "var(--grey-700, #272727)"};
font-family: DM Sans;
font-size: ${props => props.fontSize ? props.fontSize : "1rem"};
font-style: normal;
font-weight: ${props => props.fontWeight ? props.fontWeight : 700};
line-height: 2rem;
`
export const ReviewStyles = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate: "final",
  exit: "exit",
  variants: switchEleVariants,
}))`
  @media screen and (min-width: 490px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ReviewListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  img {
    border-radius: 6.25rem;
  }
  .review {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }
  span {
    color: var(--grey-300, #979797);
    font-family: DM Sans;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
  }
  .review-deet {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  @media screen and (min-width: 490px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export interface IBoldXtra {
  color: string;
}
export const BoldXtraSmallStyles = styled(XtraSmall)<IBoldXtra>`
  color: ${(props) => props.color};
  font-size: 0.875rem;
  font-weight: 700;
`;
export const RegularSmallStyles = styled(XtraSmall)<IBoldXtra>`
  color: ${(props) => props.color};
  text-align: left;
  font-weight: 400;
`;

export interface IDetailNavSwitch {
  $isSelected: boolean;
}
export const DetailNavSwitchStyles = styled.button<IDetailNavSwitch>`
  color: ${(props) =>
    props.$isSelected ? "var(--purple, #7d26cd)" : "var(--grey-400, #747474)"};
  background: transparent;
  position: relative;
  font-size: 1rem;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  height: 2.5rem;
  text-transform: uppercase;
  width: 20%;
  text-align: center;
  border-bottom: 2px solid #eeeeee;
  .underline{
    height: 0.25rem;
    background: #7D26CD;
    width: 100%;
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
  }
  @media screen and (min-width: 728px) and (min-width: 912px)  {
    // width: auto;
`;
