import { ITeamMember } from "@/components/Aboutpage/AboutPage";
import { IFilterButton } from "@/components/Button/FilterButton";
import { IReachout } from "@/components/Contactpage/Reachout";
import { ICourse } from "@/components/CourseCard/CourseCard";
import { IReason } from "@/components/HomepageComp/Chooseus";
import { IFaq } from "@/components/HomepageComp/Faq";
import { ITestimony } from "@/components/HomepageComp/Testimonials";
import { IPlan } from "@/components/Payments/Payments";

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
    id: 1,
    desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
    skills: [
      "Visual Design",
      "Wireframing & Prototyping",
      "Interaction Design",
      "User Research",
      "Mobile App & Responsive Web Design",
      "Userability Testing",
      "Figma",
      "Adobe XD",
    ],
    duration: 3,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Visual Design",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "User Research and Analysis",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Web and Mobile App Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design an nft landing page",
          "Design an e-learning website",
          "Redesign twitter user dashboard",
          "Design an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 700,
    introVideo: "https://youtu.be/BOt3MNB71gI",
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
    id: 2,
    desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
    skills: [
      "Visual Design",
      "Wireframing & Prototyping",
      "Interaction Design",
      "User Research",
      "Mobile App & Responsive Web Design",
      "Userability Testing",
      "Figma",
      "Adobe XD",
    ],
    duration: 3,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Visual Design",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "Visual Design",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Web and Mobile App Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design an nft landing page",
          "Design an e-learning website",
          "Redesign twitter user dashboard",
          "Design an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 750,
    introVideo: "https://youtu.be/BOt3MNB71gI",
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
    id: 3,
    desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
    skills: [
      "Visual Design",
      "Wireframing & Prototyping",
      "Interaction Design",
      "Corel Draw",
      "Photoshop",
      "Figma",
      "Adobe XD",
    ],
    duration: 3,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Visual Design",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "User Research and Analysis",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Web and Mobile App Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design a flier",
          "Design an e-learning website logo",
          "Design a billboard poster",
          "Design a real estate advertisement ad poster",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 100,
    introVideo: "https://youtu.be/WONZVnlam6U",
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
    id: 4,
    desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
    skills: [
      "Visual Design",
      "Wireframing & Prototyping",
      "Interaction Design",
      "User Research",
      "Mobile App & Responsive Web Design",
      "Userability Testing",
      "Figma",
      "Adobe XD",
    ],
    duration: 5,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Microsoft Excel",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "Microsoft Access",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "SQL databases and Querying",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design an nft landing page",
          "Design an e-learning website",
          "Redesign twitter user dashboard",
          "Design an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 90,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 80,
        comments: 150,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 400,
    introVideo: "https://youtu.be/SfE3aO3LWi0",
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
    id: 5,
    desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
    skills: [
      "HTML",
      "Cascading style sheet",
      "Javascript",
      "User Research",
      "Mobile App & Responsive Web Design",
      "Userability Testing",
      "Figma to code",
      "React",
    ],
    duration: 6,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "HMTL, The Backbone of the Web",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "CSS, Beauty of the web",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Responsive Web Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Code an nft landing page",
          "Develop an e-learning website",
          "Redesign twitter user dashboard",
          "Develop an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 4,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 700,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 7,
      },
    ],

    totalReviews: 800,
    introVideo: "https://youtu.be/zJSY8tbf_ys",
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
    id: 6,
    desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
    skills: [
      "Visual Design",
      "Wireframing & Prototyping",
      "Interaction Design",
      "User Research",
      "Mobile App & Responsive Web Design",
      "Userability Testing",
      "Figma",
      "Adobe XD",
    ],
    duration: 3,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Visual Design",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "Visual Design",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Web and Mobile App Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design an nft landing page",
          "Design an e-learning website",
          "Redesign twitter user dashboard",
          "Design an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/mide.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 70,
        comments: 151,
        img: "/assets/mike.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 430,
    introVideo: "https://youtu.be/SfE3aO3LWi0",
  },
  {
    name: "Database Management",
    img: "/assets/database.jpg",
    dollarPrice: 380.5,
    nairaPrice: null,
    level: "Beginner",
    category: "New",
    isLoved: false,
    rating: 4.7,
    noEnrolled: 72,
    field: "Programming",
    id: 7,
    desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
    skills: [
      "Visual Design",
      "Wireframing & Prototyping",
      "Interaction Design",
      "User Research",
      "Mobile App & Responsive Web Design",
      "Userability Testing",
      "Figma",
      "Adobe XD",
    ],
    duration: 3,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Visual Design",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "Visual Design",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Web and Mobile App Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design an nft landing page",
          "Design an e-learning website",
          "Redesign twitter user dashboard",
          "Design an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 720,
    introVideo: "https://youtu.be/mqprM5YUdpk",
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
    id: 8,
    desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
    skills: [
      "Visual Design",
      "Wireframing & Prototyping",
      "Interaction Design",
      "User Research",
      "Mobile App & Responsive Web Design",
      "Userability Testing",
      "Figma",
      "Adobe XD",
    ],
    duration: 3,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Visual Design",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "Visual Design",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Web and Mobile App Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design an nft landing page",
          "Design an e-learning website",
          "Redesign twitter user dashboard",
          "Design an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 170,
    introVideo: "https://youtu.be/hbN9RGcQFNU",
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
    id: 9,
    desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
    skills: [
      "Visual Design",
      "Wireframing & Prototyping",
      "Interaction Design",
      "User Research",
      "Mobile App & Responsive Web Design",
      "Userability Testing",
      "Figma",
      "Adobe XD",
    ],
    duration: 3,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Visual Design",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "Visual Design",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Web and Mobile App Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design an nft landing page",
          "Design an e-learning website",
          "Redesign twitter user dashboard",
          "Design an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 70,
    introVideo: "https://youtu.be/_shA5Xwe8_4",
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
    id: 10,
    desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
    skills: [
      "Visual Design",
      "Wireframing & Prototyping",
      "Interaction Design",
      "User Research",
      "Mobile App & Responsive Web Design",
      "Userability Testing",
      "Figma",
      "Adobe XD",
    ],
    duration: 3,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Visual Design",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "Visual Design",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Web and Mobile App Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design an nft landing page",
          "Design an e-learning website",
          "Redesign twitter user dashboard",
          "Design an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/mide.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 70,
        comments: 151,
        img: "/assets/mike.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 500,
    introVideo: "https://youtu.be/7CqJlxBYj-M",
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
    id: 11,
    desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
    skills: [
      "Visual Design",
      "Wireframing & Prototyping",
      "Interaction Design",
      "User Research",
      "Mobile App & Responsive Web Design",
      "Userability Testing",
      "Figma",
      "Adobe XD",
    ],
    duration: 3,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Visual Design",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "Visual Design",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Web and Mobile App Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design an nft landing page",
          "Design an e-learning website",
          "Redesign twitter user dashboard",
          "Design an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 1000,
    introVideo: "https://youtu.be/kHybf1aC-jE",
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
    id: 12,
    desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
    skills: [
      "Visual Design",
      "Wireframing & Prototyping",
      "Interaction Design",
      "User Research",
      "Mobile App & Responsive Web Design",
      "Userability Testing",
      "Figma",
      "Adobe XD",
    ],
    duration: 3,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Visual Design",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "Visual Design",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Web and Mobile App Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design an nft landing page",
          "Design an e-learning website",
          "Redesign twitter user dashboard",
          "Design an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 340,
    introVideo: "https://youtu.be/x9_DvOwiqM8",
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
    id: 13,
    desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
    skills: [
      "Visual Design",
      "Wireframing & Prototyping",
      "Interaction Design",
      "User Research",
      "Mobile App & Responsive Web Design",
      "Userability Testing",
      "Figma",
      "Adobe XD",
    ],
    duration: 3,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Visual Design",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "Visual Design",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Web and Mobile App Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design an nft landing page",
          "Design an e-learning website",
          "Redesign twitter user dashboard",
          "Design an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 350,
    introVideo: "https://youtu.be/_DVVNOGYtmU",
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
    id: 14,
    desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
    skills: [
      "Visual Design",
      "Wireframing & Prototyping",
      "Interaction Design",
      "User Research",
      "Mobile App & Responsive Web Design",
      "Userability Testing",
      "Figma",
      "Adobe XD",
    ],
    duration: 3,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Visual Design",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "Visual Design",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Web and Mobile App Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design an nft landing page",
          "Design an e-learning website",
          "Redesign twitter user dashboard",
          "Design an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 570,
    introVideo: "https://youtu.be/wrxicEWGcfI",
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
    desc: "Tobi has built a reputation in the startup ecosystem",
  },
  {
    name: "Dev. Richard Michael",
    image: "/assets/richard.png",
    post: "Head of Development",
    desc: "Michael has built a reputation in the dev community",
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
    deet: "Xendargroup@gmail.com",
    note: "You can send us an email and we’ll get back to you.",
    svg: "email",
    link: "mailto:judetochyokoye@gmail.com",
  },
  {
    name: "Call",
    deet: "+234 813 556 7894",
    note: "You can call us anytime, anyday",
    svg: "phone",
    link: "tel:08149756765",
  },
  {
    name: "Visit",
    deet: "Unilag, Akoka, Lagos",
    note: "  Mon-Thur:  8:00AM - 4:00PM Fri :  8:00AM - 1:30PM",
    svg: "location",
    link: "https://maps.google.com?q=6.5158,3.3898",
  },
];

export interface ITab {
  num: number;
  name: string;
  isSelected: boolean;
}
export const Tabs: ITab[] = [
  { num: 0, name: "OVERVIEW", isSelected: true },
  { num: 1, name: "SYLLABUS", isSelected: false },
  { num: 2, name: "REQUIREMENTS", isSelected: false },
  { num: 3, name: "TUTORS", isSelected: false },
  { num: 4, name: "REVIEWS", isSelected: false },
];

export interface IEnrolledCourse {
  courseId: number;
  isFree: boolean;
  isPaid: boolean;
  plan : IPlan;
}
export interface IUser {
  name: string;
  email: string;
  enrolledCourses: IEnrolledCourse[] | null;
}
