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
  onco,
  dlab, 
  spotifyvault,
  dishdetect, 
  skimlit,
  chaingpt,
  threejs,
  comingsoon,
  country,
  bam
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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Machine Learning Developer",
    icon: mobile,
  },
  {
    title: "Distributed Systems Developer",
    icon: backend,
  },
  {
    title: "UI/UX Developer",
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
    title: "Summer Associate Data Engineer",
    company_name: "Balyasny Asset Management",
    icon: bam,
    iconBg: "#383E56",
    date: "Incoming",
    points: [
      "Engineered and deployed a message outboxing microservice using ASP.NET and Kafka, improving message reliability for real-time tracker of 1000+ broker transactions.",
      "Developed a broker research summarizer that auto-parses and annotates equity research documents, accelerating internal insights delivery by 3x and supporting decision-making for $500M+ in client assets.",
      "Built an in-process distributed cache using Paxos for consensus and optimized SQL Server queries, resulting in 2.5x improvement in dashboard load times and a smoother experience for analysts."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Country Financial",
    icon: country,
    iconBg: "#383E56",
    date: "Incoming",
    points: [
      "Developed Python test automation framework proof of concept for Salesforce API using Selenium, BeautifulSoup, and RobotFramework, reducing manual testing time by 40%.",
      "Containerized test automation framework with Docker and deployed it on an Azure Container Instance to integrate with existing CI/CD pipelines.",
      "Wrote Python scripts to retrieve and organize Splunk API data, helping identify cost-saving opportunities that led to a 12\% reduction in monthly cloud expenses."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Oncosoft",
    icon: onco,
    iconBg: "#383E56",
    date: "Oct 2024 - Jan 2025",
    points: [
      "Developed workflow management tools for Radiation Oncology startup with $8M+ in series B funding.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Gies Disruption Lab",
    icon: dlab,
    iconBg: "#383E56",
    date: "Sept 2024 - Dec 2024",
    points: [
      "Collaborating alongside Prof. Pieper to create aa chatbot using Agentic RAG and persistent memory modules.",
      "Optimized response generation with K-Nearest-Neighbor search inside a FAISS vector DB, increasing model accuracy by 25% and reducing query latency by 35 %.",
      "Developed file storage solutions on AWS S3, leveraging structured bucket organization and integrating Amazon CloudFront to enhance data retrieval efficiency and reduce access latency.",
      "Implemented OAuth2 based user authentication in Node.js backend for secure session management"
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "JACS Solutions",
    icon: jacs,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Designed FOTA (firmware over the air) features for mobile device management system housing 10,000+ devices.",
      "Applied Spring Boot to create WebSocket management system with SSL communication and session management.",
      "Migrated frontend to React.js, enhancing client-side CRUD operations and optimizing server performance by 5%.",
      "Refactored backend logic into a Model-View-Controller architecture, streamlining FOTA management and saving customers 3+ hours of external manual work.",
      "Drafted and deployed integration tests to evaluate API and controller with the Spring Boot testing library."
    ],
  },
];

const projects = [
  {
    name: "Carsties",
    description:
      "Car auction site with a microservice architecture using Next.js, ASP.NET, and RabbitMQ.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET",
        color: "green-text-gradient",
      },
      {
        name: "RabbitMQ",
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