import { IFilterButton } from "@/components/Button/FilterButton";
import { ICourse } from "@/components/CourseCard/CourseCard";
import { IReason } from "@/components/HomepageComp/Chooseus";
import { IFaq } from "@/components/HomepageComp/Faq";
import { ITestimony } from "@/components/HomepageComp/Testimonials";

export const AllCourses: ICourse[] = [
  {
    name: "UI/UX Design",
    img: "/assets/ui_ux_design.png",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Design",
  },
  {
    name: "Fudamentals of UX",
    img: "/assets/ui_ux.png",
    dollarPrice: 200.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 5.0,
    noEnrolled: 800,
    field: "Design",
  },
  {
    name: "Graphics Design",
    img: "/assets/graphics.png",
    dollarPrice: 150.49,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.4,
    noEnrolled: 300,
    field: "Design",
  },
  {
    name: "Data Analysis for Newbies",
    img: "/assets/data_analysis.png",
    dollarPrice: 250.49,
    nairaPrice: null,
    level: "Beginner",
    category: "New",
    isLoved: false,
    rating: 4.6,
    noEnrolled: 70,
    field: "Programming",
  },
  {
    name: "Frontend Engineering",
    img: "/assets/fe_engr.png",
    dollarPrice: 305.99,
    nairaPrice: null,
    level: "Expert",
    category: "Most Popular",
    isLoved: false,
    rating: 4.8,
    noEnrolled: 490,
    field: "Programming",
  },
  {
    name: "Backend Engineering",
    img: "/assets/backend.png",
    dollarPrice: 400.99,
    nairaPrice: null,
    level: "Intermediate",
    category: "Most Popular",
    isLoved: false,
    rating: 5.0,
    noEnrolled: 312,
    field: "Data",
  },
  {
    name: "Database Management for Newbies",
    img: "/assets/fe_engr.png",
    dollarPrice: 380.5,
    nairaPrice: null,
    level: "Beginner",
    category: "New",
    isLoved: false,
    rating: 4.7,
    noEnrolled: 72,
    field: "Programming",
  },
  {
    name: "Figma For Devs",
    img: "/assets/fe_engr.png",
    dollarPrice: 300.49,
    nairaPrice: null,
    level: "Intermediate",
    category: "New",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 122,
    field: "Design",
  },
  {
    name: "React and Redux",
    img: "/assets/fe_engr.png",
    dollarPrice: 200.49,
    nairaPrice: null,
    level: "Beginner",
    category: "New",
    isLoved: false,
    rating: 4.8,
    noEnrolled: 50,
    field: "Programming",
  },
  {
    name: "MERN Fullstack Course",
    img: "/assets/fe_engr.png",
    dollarPrice: 500.49,
    nairaPrice: null,
    level: "Intermediate",
    category: "New",
    isLoved: false,
    rating: 4.5,
    noEnrolled: 12,
    field: "Programming",
  },
  {
    name: "Blockchain Engineering",
    img: "/assets/blockchain.png",
    dollarPrice: 500.49,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.8,
    noEnrolled: 500,
    field: "Programming",
  },
  {
    name: "Cyber Security",
    img: "/assets/cybersecurity.png",
    dollarPrice: 400.49,
    nairaPrice: null,
    level: "Intermediate",
    category: "New",
    isLoved: false,
    rating: 4.4,
    noEnrolled: 35,
    field: "Programming",
  },
];

export const FiltersByTime: IFilterButton[] = [
  { filter: "Most Popular", isSelected: true },
  { filter: "New", isSelected: false },
];
export const FiltersByType: IFilterButton[] = [
  { filter: "All Courses", isSelected: true },
  { filter: "Design", isSelected: false },
  { filter: "Programming", isSelected: false },
  { filter: "Data", isSelected: false },
  { filter: "Finance", isSelected: false },
  { filter: "Security", isSelected: false },
];

export const Reasons: IReason[] = [
  {
    img: "/assets/one.png",
    head: "Regular Accessments",
    text: "We give our students real life accessments to help them improve their knowledge on core areas",
  },
  {
    img: "/assets/two.png",
    head: "On-site & Remote Learning",
    text: "We give our students real life accessments to help them improve their knowledge on core areas",
  },
  {
    img: "/assets/three.png",
    head: "Certificate",
    text: "We give our students real life accessments to help them improve their knowledge on core areas",
  },
  {
    img: "/assets/four.png",
    head: "Community",
    text: "We give our students real life accessments to help them improve their knowledge on core areas",
  },
  {
    img: "/assets/five.png",
    head: "Job Opportunites",
    text: "We give our students real life accessments to help them improve their knowledge on core areas",
  },
];

export const Testimonies: ITestimony[] = [
  {
    id: null,
    img: "/assets/mide.png",
    name: "Omotosho Mide",
    position: "Alumni",
    isActive: false,
    comment:
      "Definitely one of the best places to learn. I can say that I’m very confident with my skills in Product Design ",
  },
  {
    id: null,
    img: "/assets/mike.png",
    name: "Micheal Ajala",
    position: "Alumni",
    isActive: true,
    comment:
      "I enjoyed each course from the first week. I got to practise with real world projects and this made me confident",
  },
  {
    id: null,
    img: "/assets/tayo.png",
    name: "Omotayo",
    position: "Student",
    isActive: false,
    comment:
      "Definitely one of the best places to learn. I can say that I’m very confident with my skills in Product Design",
  },
];


export const Faqs: IFaq[] = [
  {
    id: null,
    question: "How many months will it take to complete a course?",
    showAnswer : true,
    answer:
      "Each course takes approximately 3-4 months to be complete after which you take a certification test and you’re given a project to work on. Your classes can be extended if you fail to meet the passmark of the certification test.",
  },
  {
    id: null,
    question: "How long is the demo class each course?",
    showAnswer : false,
    answer:
      "The demo class for each course will last for approximately 7days, you are advised to make the best use of it.",
  },
  {
    id: null,
    question: "Do I get a recognized a certificate?",
    answer: "You get a recognized certificate after completely a course",
    showAnswer : false,
  },
  {
    id: null,
    question: "Will i automatically get a job after completing a course?",
    showAnswer : false,
    answer:
      "We do not guarantee automatic employment at the completion of a course, but we communities which serve as a talent pool for employers and it's totally open for you to join.",
  },
  {
    id: null,
    showAnswer : false,
    question: "Are onsite classes available?",
    answer: "Our services are fully online but if needs be that you need an onsite, contact our hotlines.",
  },
];
