import { css, styled } from "styled-components";
import { IHover } from "../IconsStyles/icons";
import { motion } from "framer-motion";
import { wishlistvariants } from "@/Animations/LandingPageVariants";
import { IButton } from "../ButtonStyles/ButtonGroup";

export const InfoStyles = styled.div`
  background: var(--purple-900, #2a0d44);
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  display: flex;
  color: var(--off-white, #fefefe);
  position: relative;
  h3 {
    text-align: center;
    font-family: DM Sans;
    font-weight: 700;
    line-height: 1.5rem;
    font-size: 0.6875rem;
  }
  .desktop {
    display: none;
  }
  @media screen and (min-width: 728px) {
    h3 {
      font-size: 1rem;
    }
    .desktop {
      display: flex;
    }
  }
`;

export interface IWishlist extends IHover {
  length: number;
}
export const WishlistStyles = styled(motion.div).attrs<IWishlist>(() => ({
  initial: "initial",
  animate: "final",
  exit: "exit",
  variants: wishlistvariants,
}))`
  position: absolute;
  top: 0;
  left: 72%;
  border-radius: 8px;
  background: var(--background-white, #f5f5f5);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  width: 200px;
  padding: 1rem;
  p {
    color: var(--grey-500, #525252);
    text-align: center;
    font-size: 0.75rem;
    font-family: DM Sans;
    font-weight: 700;
    line-height: 1.5rem;
  }
  .empty {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .wishlist {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .wishlist::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.length > 2 &&
    css`
      .wishlist {
        height: 300px;
        overflow-y: scroll;
      }
    `}
  @media screen and (min-width: 998px) {
    left: 81%;
  }
`;

export const Addtowishlist = styled.button`
  height: 30px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--purple, #7d26cd);
  color: var(--purple, #7d26cd);
  font-size: 0.75rem;
  font-family: DM Sans;
  font-weight: 700;
  line-height: 1.5rem;
`;
export const GotoCourse = styled.button`
  height: 30px;
  width: 80%;
  border-radius: 4px;
  border: 1px solid var(--purple, #7d26cd);
  color: var(--purple, #7d26cd);
  font-size: 0.75rem;
  font-family: DM Sans;
  font-weight: 700;
  line-height: 1.5rem;
`;

export const WishlistItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: DM Sans;
  line-height: 1.5rem;
  img {
    border-radius: 50%;
    object-fit: cover;
  }
  .one,
  .two {
    display: flex;
    gap: 0.5rem;
  }
  h4,
  h5 {
    color: var(--grey-500, #525252);
    font-size: 0.875rem;
    font-family: DM Sans;
    font-weight: 700;
  }
  p {
    color: var(--grey-400, #747474);
    font-size: 0.75rem;
    text-align: left;
  }
  h5 {
    font-size: 0.875rem;
  }
  span {
    color: var(--grey-300, #979797);
    font-size: 0.625rem;
  }
  .prices {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  hr {
    border: 0.046rem solid #e5d4f5;
  }
`;

export const TrashContStyle = styled.button<IButton>`
  border-radius: 4px;
  border: 1px solid var(--red-400, #e6736a);
  display: flex;
  padding: 0.25rem;
  justify-content: center;
  align-items: center;
`;
