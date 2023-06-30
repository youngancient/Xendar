import { ITeamMember } from "@/components/Aboutpage/AboutPage";
import { IFilterButton } from "@/components/Button/FilterButton";
import { IReachout } from "@/components/Contactpage/Reachout";
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
    field: "Data",
  },
  {
    name: "Frontend Engineering Course",
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
    name: "Data Analysis for Experts",
    img: "/assets/data_analysis.png",
    dollarPrice: 450.99,
    nairaPrice: null,
    level: "Expert",
    category: "Most Popular",
    isLoved: false,
    rating: 5.0,
    noEnrolled: 312,
    field: "Data",
  },
  {
    name: "Database Management for Newbies",
    img: "/assets/database.jpg",
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
    img: "/assets/figma.png",
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
    img: "/assets/react_redux.png",
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
    name: "The Ultimate MERN Fullstack Course",
    img: "/assets/mern.png",
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
    name: "Tokenization",
    img: "/assets/blockchain.png",
    dollarPrice: 500.49,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 500,
    field: "Finance",
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
    field: "Security",
  },
  {
    name: "Ethical Hacking 101",
    img: "/assets/hacking.jpg",
    dollarPrice: 200.49,
    nairaPrice: null,
    level: "Beginner",
    category: "New",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 75,
    field: "Security",
  },
];

export const FiltersByTime: IFilterButton[] = [
  { filter: "Most Popular", isSelected: true },
  { filter: "New", isSelected: false },
];
export const FiltersByType: IFilterButton[] = [
  { filter: "All Courses", isSelected: true, filterByType: true },
  { filter: "Design", isSelected: false, filterByType: true },
  { filter: "Programming", isSelected: false, filterByType: true },
  { filter: "Data", isSelected: false, filterByType: true },
  { filter: "Finance", isSelected: false, filterByType: true },
  { filter: "Security", isSelected: false, filterByType: true },
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
    showAnswer: true,
    answer:
      "Each course takes approximately 3-4 months to be complete after which you take a certification test and you’re given a project to work on. Your classes can be extended if you fail to meet the passmark of the certification test.",
  },
  {
    id: null,
    question: "How long is the demo class each course?",
    showAnswer: false,
    answer:
      "The demo class for each course will last for approximately 7days, you are advised to make the best use of it.",
  },
  {
    id: null,
    question: "Do I get a recognized a certificate?",
    answer: "You get a recognized certificate after completely a course",
    showAnswer: false,
  },
  {
    id: null,
    question: "Will i automatically get a job after completing a course?",
    showAnswer: false,
    answer:
      "We do not guarantee automatic employment at the completion of a course, but we communities which serve as a talent pool for employers and it's totally open for you to join.",
  },
  {
    id: null,
    showAnswer: false,
    question: "Are onsite classes available?",
    answer:
      "Our services are fully online but if needs be that you need an onsite, contact our hotlines.",
  },
];

export const TeamMembers: ITeamMember[] = [
  {
    name: "Dev. Tobi Jacobs",
    image: "/assets/tobi.png",
    post: "CEO",
    desc: "Michael has built a reputation in the design community",
  },
  {
    name: "Dev. Richard Michael",
    image: "/assets/richard.png",
    post: "Head of Development",
    desc: "Michael has built a reputation in the design community",
  },
  {
    name: "Dev. Micheal Ajala",
    image: "/assets/mike-team.png",
    post: "Head of Design",
    desc: "Michael has built a reputation in the design community",
  },
];

export const Contacts: IReachout[] = [
  {
    name: "Email",
    deet: "vephlagroup@gmail.com",
    note: "You can send us an email and we’ll get back to you.",
    svg: "email",
    link : "mailto:judetochyokoye@gmail.com"
  },
  {
    name: "Call",
    deet: "+234 813 556 7894",
    note: "You can call us anytime, anyday",
    svg: "phone",
    link : "tel:08149756765"
  },
  {
    name: "Visit",
    deet: "Unilag, Akoka, Lagos",
    note: "  Mon-Thur:  8:00AM - 4:00PM Fri :  8:00AM - 1:30PM",
    svg: "location",
    link : "https://maps.google.com?q=6.5158,3.3898"
  },
];

