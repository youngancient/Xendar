import {
  TestimonialStyles,
  TestimonyStyles,
} from "@/styles/HomepageStyles/Homepage";
import SectionHead from "../SectionHead/SectionHead";

export const Testimonials = () => {
  return (
    <TestimonialStyles>
      <SectionHead
        bigtext="Let Them Speak For Us"
        smalltext="Some reviews from our past and present trainees"
      />
    </TestimonialStyles>
  );
};

export const Testimony = () => {
  return <TestimonyStyles></TestimonyStyles>;
};
