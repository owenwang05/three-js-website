import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  jacs, 
  enactus, 
  ev, 
  vex, 
  cobweb,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "AI/ML Developer",
    icon: backend,
  },
  {
    title: "Full-Time Student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Embedded Systems Intern",
    company_name: "JACS Solutions",
    icon: jacs,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Incoming Summer 2024 Intern",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Hydrologic",
    icon: enactus,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - May 2024",
    points: [
      "Retrieve University Housing statistics through an AWS connection and streamlined data representation in Streamlit.",
      "Architect the core structure of the web-app, implementing filtering, saving, and comparison functionalities.",
      "Migrate code to React, Tailwind, Chart.JS, and Firebase to improve customizability, efficiency, and user experience.",
      "Communicate with project managers to discuss areas of improvement, applying updates promptly.",
    ],
  },
  {
    title: "Electrical Team",
    company_name: "UIUC EV Concept",
    icon: ev,
    iconBg: "#383E56",
    date: "Aug 2023 - Jan 2024",
    points: [
      "Improved PCBs for the monitoring system of an active BMS that measure cell voltage, temperature, and current.",
      "Developed a machine learning neural network that estimates state of charge utilizing recorded values and algorithms.",
      "Migrated model onto a Microcontroller through C++ and STM32, improving efficiency of BMS by 30%.",
    ],
  },
  {
    title: "Software Team",
    company_name: "UIUC VEX Robotics",
    icon: vex, 
    iconbg: "#E6DEDD",
    date: "Aug 2023 - Jan 2024",
    points: [
      "Created a computer vision model using OpenCV and Python to detect green “acorn” shaped objects.",
      "Developed an algorithm that tracks and draws contours at varying distances and lightings by estimating circularity."
    ]
  },
  {
    title: "Student Researcher",
    company_name: "COBWEB @UofT",
    icon: cobweb,
    iconBg: "#383E56",
    date: "Oct 2022 - Oct 2023",
    points: [
      "Spearheaded the development and analysis of computer vision and spring-mass systems by integrating COBWEB.",
      "Optimized Java and C++ codebase to reduce memory consumption, resulting in 10% performance enhancement.",
      "Engaged in discussion and collaborations with professors and peers to collect feedback to refine software.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, projects };