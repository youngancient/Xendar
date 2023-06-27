import { FaqCompStyles, FaqStyles } from "@/styles/HomepageStyles/FaqStyles";
import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { FunctionComponent } from "react";
import SectionHead from "../SectionHead/SectionHead";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { FaqArrow } from "../Icons/Icons";
import { showFaqAnswer } from "@/redux/dataSlice";
import { AnimatePresence, motion } from "framer-motion";
import { faqAnswerVariants } from "@/Animations/LandingPageVariants";

export interface IFaq {
  id: number | null;
  question: string;
  answer: string;
  showAnswer: boolean;
}
export const Faq: FunctionComponent = () => {
  const { faqs } = useAppSelector((state: RootState) => state.data);
  return (
    <FaqStyles>
      <ActualPaddedSectionStyle>
        <SectionHead
          bigtext="Frequently Asked Questions"
          smalltext="Check out what some of our past and present students are saying"
        />
        <div className="faqs">
          {faqs.map((ele, index) => (
            <FaqComp
              id={index}
              question={ele.question}
              answer={ele.answer}
              key={index}
              showAnswer={ele.showAnswer}
            />
          ))}
        </div>
      </ActualPaddedSectionStyle>
    </FaqStyles>
  );
};

export const FaqComp: FunctionComponent<IFaq> = ({
  id,
  question,
  answer,
  showAnswer,
}) => {
  const dispatch = useAppDispatch();

  const toggleFaq = () => {
    dispatch(showFaqAnswer(id));
  };
  return (
    <FaqCompStyles onClick={toggleFaq} $showAnswer={showAnswer}>
      <div className="question">
        <h4>{question}</h4>
        <FaqArrow $showAnswer={showAnswer} />
      </div>
      <AnimatePresence>
      {showAnswer && (
        <motion.div className="answer"
        variants={faqAnswerVariants}
        initial = "initial"
        animate = "final"
        exit= "exit"
        >
          <p>{answer}</p>
        </motion.div>
      )}
      </AnimatePresence>
    </FaqCompStyles>
  );
};
