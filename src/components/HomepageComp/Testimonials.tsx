import {
  TestimonialStyles,
  TestimonyStyles,
} from "@/styles/HomepageStyles/Homepage";
import SectionHead from "../SectionHead/SectionHead";
import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { FunctionComponent, useEffect } from "react";
import Image from "next/image";
import { BlackQuote, Union, WhiteQuote } from "../Icons/Icons";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import {
  resetActiveTestimonials,
  setActiveTestimonials,
} from "@/redux/dataSlice";

export const Testimonials: FunctionComponent = () => {
  const { testimonies } = useAppSelector((state: RootState) => state.data);

  return (
    <TestimonialStyles>
      <ActualPaddedSectionStyle>
        <SectionHead
          bigtext="Let Them Speak For Us"
          smalltext="Some reviews from our past and present trainees"
        />
        <div className="testimonies">
          {testimonies.map((ele, index) => (
            <Testimony
              id={index}
              key={index}
              name={ele.name}
              comment={ele.comment}
              img={ele.img}
              position={ele.position}
              isActive={ele.isActive}
            />
          ))}
        </div>
      </ActualPaddedSectionStyle>
    </TestimonialStyles>
  );
};

export interface ITestimony {
  id: number | null;
  name: string;
  position: string;
  img: string;
  comment: string;
  isActive: boolean;
}
export const Testimony: FunctionComponent<ITestimony> = ({
  name,
  img,
  comment,
  position,
  isActive,
  id,
}) => {
  const dispatch = useAppDispatch();
  const makeActive = () => {
    dispatch(setActiveTestimonials(id));
  };
  const resetActive = () => {
    dispatch(resetActiveTestimonials());
  };

  return (
    <TestimonyStyles $isActive={isActive}>
      <div
        className="comment"
        onMouseOver={makeActive}
        onClick={makeActive}
        onMouseLeave={resetActive}
      >
        {isActive ? <WhiteQuote /> : <BlackQuote />}
        <p>{comment}</p>
      </div>
      <div className="below">
        <Union />
        <Image src={img} width={64} height={64} alt={name} />
        <h4>{name}</h4>
        <span>{position}</span>
      </div>
    </TestimonyStyles>
  );
};
