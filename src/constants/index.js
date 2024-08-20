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
  spotifyvault,
  dishdetect, 
  skimlit,
  chaingpt,
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
    title: "Machine Learning Developer",
    icon: web,
  },
  {
    title: "Full-Stack Web Developer",
    icon: mobile,
  },
  {
    title: "Embedded Systems Developer",
    icon: backend,
  },
  {
    title: "Distributed Systems Developer",
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
      "Designed FOTA (firmware over the air) features for mobile device management system via a WebSocket communication established between server and devices through Spring Boot.",
      "Migrated frontend to React.js and leveraged RESTful API to create 2 microservices with 10+ endpoints, enchancing client-side CRUD operations and optimizing server performance by 5%",
      "Refactored backend logic into a Model-View-Controller architecture, streamlining FOTA management and saving customers 3+ hours of manual work.",
      "Resolved 15+ bugs by drafting and deploying integration tests with the Spring Boot testing library."
    ],
  },
  {
    title: "Project Lead",
    company_name: "Hydrologic",
    icon: enactus,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - May 2024",
    points: [
      "Established an ESP32 to Firebase Realtime-Database connection to retrieve University Housing shower statistics and analyzed data to reduce average water consumption by 10%.",
      "Led a group of four to architect filtering, saving, and comparison functionalities using Next.js and Tailwind.",
      "Utilized Jira to apply SCRUM principles, delivering 20% ahead of schedule and 7% under budget." 
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
];

const projects = [
  {
    name: "Road Test",
    description:
      "Creating object detection model using YOLOv9 and an LSTM network in TensorFlow to automate driving tests.",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "YOLOv9",
        color: "green-text-gradient",
      },
      {
        name: "LSTM",
        color: "pink-text-gradient",
      },
    ],
    image: comingsoon,
    source_code_link: "https://github.com/owenwang05",
  },
  {
    name: "SkimLit",
    description:
      "A summarizer that organizes and classifies items in an abstract from scientific papers using a multimodal NLP model.",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "RNN",
        color: "pink-text-gradient",
      },
    ],
    image: skimlit,
    source_code_link: "https://github.com/owenwang05/skim-lit",
  },
  {
    name: "Dish Detect",
    description:
      "A comprehensive food classification software that utilizes Fine Tuning and Convolutional Neural Networks",
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
    image: dishdetect,
    source_code_link: "https://github.com/owenwang05/food-vision",
  },
  {
    name: "Chain GPT",
    description:
      "An interactive LangChain documentation helper that uses agentic RAG conencted to an embedded Pinecone VectorDB",
    tags: [
      {
        name: "LangChain",
        color: "blue-text-gradient",
      },
      {
        name: "RAG",
        color: "green-text-gradient",
      },
      {
        name: "ReAct",
        color: "pink-text-gradient",
      },
    ],
    image: chaingpt,
    source_code_link: "https://github.com/owenwang05/chain-gpt",
  },
  {
    name: "Spotify Vault",
    description:
      "Full-stack application that allows users to track, store, and display historical Spotify listening statistics",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
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