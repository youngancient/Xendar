import CourseCatalog from "@/components/Coursepage/CourseCatalog";
import { BigSectionHead } from "@/components/SectionHead/BigSectionHead";
import { MarginStyle } from "@/styles/CoursepageStyles/Coursepage";
import { CenterItemStyle } from "@/styles/HeroStyles/CenterItem";
import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";

const Courses = () => {
  return (
    <>
    
      <CenterItemStyle>
        <BigSectionHead
          bigtext="Check out the courses we offer"
          smalltext="We offer a variety of courses that teach popular and in demand tech skills on the market today. "
        />
      </CenterItemStyle>
      <MarginStyle>
        <ActualPaddedSectionStyle>
          <CenterItemStyle>
            <h3>Course Catalog</h3>
          </CenterItemStyle>
          <CourseCatalog />
        </ActualPaddedSectionStyle>
      </MarginStyle>
    </>
  );
};

export default Courses;
