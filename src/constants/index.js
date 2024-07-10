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
  spotifyvault, 
  jobit,
  tripguide,
  threejs,
  comingsoon,
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
    title: "Embedded Systems Developer",
    icon: web,
  },
  {
    title: "Distributed Systems Developer",
    icon: mobile,
  },
  {
    title: "AI/ML Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Web Developer",
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
    title: "Embedded Systems Engineering Intern",
    company_name: "JACS Solutions",
    icon: jacs,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Developing the company's MDM.",
    ],
  },
  {
    title: "Project Manager",
    company_name: "Hydrologic",
    icon: enactus,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - May 2024",
    points: [
      "Established an ESP32 to Firebase Realtime-Database connection to retrieve University Housing shower statistics and analyzed data to reduce average water consumption by 10%.",
      "Directed a group of four to architect the core structure of the web-app using React.js Tailwind CSS, and Chart.js, implementing filtering, saving, and comparison functionalities. ",
      "Utilized Jira and Slack to streamline project management, delivering 20% ahead of schedule and 10% under budget." 
    ],
  },
  {
    title: "Electrical Team",
    company_name: "UIUC EV Concept",
    icon: ev,
    iconBg: "#383E56",
    date: "Aug 2023 - Jan 2024",
    points: [
      "Developed BMS monitoring system by integrating a PCB that measures cell voltage, temperature, and current. ",
      "Trained a machine learning model using linear regression that estimates SOC with values from a MATLAB simulation.",
      "Migrated model onto a Microcontroller through C++ and STM32 IDE, improving efficiency of BMS by 30%.",
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
];

const projects = [
  {
    name: "SkimLit",
    description:
      "A summarizer that organizes and classifies items in an abstract from scientific papers using NLP in TensorFlow",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
    ],
    image: comingsoon,
    source_code_link: "https://github.com/",
  },
  {
    name: "Food Vision",
    description:
      "A comprehensive food classification software that utilizes Transfer Learning and Convolutional Neural Networks in TensorFlow",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "CNN",
        color: "green-text-gradient",
      },
      {
        name: "Transfer Learning",
        color: "pink-text-gradient",
      },
    ],
    image: comingsoon,
    source_code_link: "https://github.com/",
  },
  {
    name: "Spotify Vault",
    description:
      "Full-stack application that allows users to track, store, and display historical Spotify listening statistics",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "REST",
        color: "blue-text-gradient",
      }
    ],
    image: spotifyvault,
    source_code_link: "https://github.com/owen-wang-student/spotify-vault",
  },
];

export { services, technologies, experiences, projects };