import { ArrowRight } from "@/components/Icons/Icons";
import { DetailNavStyles } from "@/styles/CoursepageStyles/CourseDetail";
import {
  CourseDetailSectionStyle,
} from "@/styles/HomepageStyles/Section";
import { useRouter } from "next/router";
import Link from "next/link";
import { CourseDetailComp } from "@/CourseDetailPage/CourseDetail";

const CourseDetail = () => {
  const router = useRouter();
  return (
    <CourseDetailSectionStyle>
      <DetailNavStyles>
        <Link href="/courses">
        <p>Courses</p>
        </Link>
        <ArrowRight />
        <strong>{router.query.name}</strong>
      </DetailNavStyles>
      <CourseDetailComp />
    </CourseDetailSectionStyle>
  );
};

export default CourseDetail;
