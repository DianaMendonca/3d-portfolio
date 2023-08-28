import {
  web,
  javascript,
  html,
  css,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  starbucks,
  webdev,
  threejs,
  reactic,
  cterm,
  hpcode,
  empatia,
  fress,
  findafriend,
  cplus,
  ruby,
  rails,
  react2,
  kellizi,
  todolist,
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
    title: "React Developer",
    icon: reactic,
  },
  {
    title: "Backend Developer",
    icon: cterm,
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
    name: "React Js",
    icon: react2,
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
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Rails",
    icon: rails,
  },
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
];

const experiences = [
  {
    title: "Technician of Conservation and Restoration of Art",
    company_name: "Fundação Ricardo do Espírito Santo Silva",
    icon: fress,
    iconBg: "#383E56",
    date: "Sep 2017 - Jul 2018",
    points: [
      "Technician of Conservation and Restoration of Art in the Museum of the Ricardo Espirito Santo Silva Foundation, Portugal.",
    ],
  },
  {
    title: "Technician of Conservation and Restoration of Art",
    company_name: "Empatia Arqueologia",
    icon: empatia,
    iconBg: "#383E56",
    date: "Feb 2018 - Jul 2018",
    points: [
      "Full Time as a Technician of Conservation and Restoration of Art in Church of Carmo, Faro, Portugal.",

    ],
  },
  {
    title: "Teacher",
    company_name: "Happy Code",
    icon: hpcode,
    iconBg: "#383E56",
    date: "Sep 2019 - Nov 2019",
    points: [
      "Guided student growth by tailoring instruction to unique learning paths, fostering a culture of continuous improvement.",
      "Revolutionised teaching with differentiated instruction, amplifying student engagement and driving remarkable learning outcomes.",
    ],
  },
  {
    title: "Store Supervisor",
    company_name: "Starbucks UK",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2021 - Jun 2022",
    points: [
      "Improved customer satisfaction by promptly and tactfully addressing complaints, leading to a better customer experience and increased brand loyalty.",
      "Diligently analysed sales trends and metrics, strategically identifying areas for improvement. Translated insights into action, playing a key role in boosting efficiency and driving strategic decisions.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: webdev,
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: [
      "Spearheaded CSS-in-JS innovation for seamless component visuals, taking user experience to new heights. Successfully revamped UI for heightened engagement.",
      "Achieved reusable component success, minimising redundancy, and speeding up maintenance. Fast-tracked feature integration and upkeep effectively.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    index: 0,
    name: "To Do List",
    description:
      "A simple To Do List in React (Web Application). You can add, edit and delete your tasks.",
    tags: [
      {
        name: "React",
        color: "react-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/GoncaloMendonca/Todo-List",
  },
  {
    index: 1,
    name: "Kellizi",
    description:
      "Web-based platform that allows users to search and manage their insurances from various providers, providing a convenient and efficient solution for managing insurances.",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "ruby",
        color: "pink-text-gradient",
      },
    ],
    image: kellizi,
    source_code_link: "https://github.com/GoncaloMendonca/Kellizi",
  },
  {
    index: 2,
    name: "Find a Friend",
    description:
      "An airbnb clone to find friends or rent ourselves as a friend.",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "ruby",
        color: "pink-text-gradient",
      },
    ],
    image: findafriend,
    source_code_link: "https://github.com/GoncaloMendonca/FIND_A_FRIEND",
  },
];

export { services, technologies, experiences, testimonials, projects };
