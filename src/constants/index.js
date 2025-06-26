import {
  javascript,
  typescript,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  chakra,
  sql,
  mui,
  html,
  ant,
  mongo,
} from "../assets/index";
import ESMS from "../assets/projects/ESMS.png";
import LJVE from "../assets/projects/LJVE.png";
import ESMP from "../assets/projects/ESMP.png";

import FPT from "../assets/exp/fpt.png";
import Vinova from "../assets/exp/vinova.png";

import LearnKartS from "../assets/cert/LearnKartS.png";
import Michigan from "../assets/cert/michigan.png";
import California from "../assets/cert/california.png";
import CertNexus from "../assets/cert/certNexus.png";
import Coursera from "../assets/cert/coursera.png";
import Sydney from "../assets/cert/sydney.png";
import Colorado from "../assets/cert/colorado.png";

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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "chakra",
    icon: chakra,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "mui",
    icon: mui,
  },
  {
    name: "ant design",
    icon: ant,
  },
  {
    name: "mongo",
    icon: mongo,
  },
];

const projects = [
  {
    id: "project-1",
    name: "EVENT SALES MANAGEMENT PLATFORM ",
    description:
      "An intuitive platform that helps hosts plan, manage, and track events of any scale with ease.",
    tags: [{ name: "react" }, { name: "javascript" }, { name: "chakraui" }],
    image: {
      src: ESMP,
    },
    repo: "https://github.com/KhoaVo0911/ESMP_UI",
    demo: "https://esmp.id.vn",
  },
  {
    id: "project-2",
    name: "LJVE",
    description:
      "A portfolio for a communication expert with a focus on storytelling and digital media.",
    tags: [
      {
        name: "react",
      },
      {
        name: "shadcn/ui",
      },
      {
        name: "typescript",
      },
    ],
    image: {
      src: LJVE,
    },
    repo: "https://github.com/KhoaVo0911/LJVE",
    demo: "https://ljve.vercel.app/",
  },
  {
    id: "project-3",
    name: "EVENT IMMEDIATE PAYMENT CARD",
    description:
      "An efficient payment system with event cards, enabling quick payments by scanning codes at booths, enhancing event experience.",
    tags: [
      {
        name: "reactjs",
      },
      {
        name: "javascript",
      },
      {
        name: "tailwindcss",
      },
      {
        name: "mui",
      },
    ],
    image: {
      src: ESMS,
    },
    repo: "https://github.com/KhoaVo0911/exe202_eips",
    demo: "https://exe202-eips.vercel.app/login",
  },
];

const experiences = [
  {
    title: "Front-End Developer Intern",
    company_name: "FPT Software Ho Chi Minh",
    icon: FPT,
    iconBg: "#333333",
    date: "Sep 2023 - Dec 2023",
  },
  {
    title: "AI Prompt Engineer Intern",
    company_name: "Vinova SG",
    icon: Vinova,
    iconBg: "#6c757d",
    date: "May 2025 - Present",
  },
];

const certifications = [
  {
    name: "Core Java for Complete Beginners Specialization",
    issuer: "LearnKartS",
    issueDate: "Feb 2025",
    logo: LearnKartS,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/H3J9PGB5QP7X",
  },
  {
    name: "UX (User Experience) Capstone",
    issuer: "University of Michigan",
    issueDate: "May 2024",
    logo: Michigan,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/BH5Y5T2HVZNX",
  },
  {
    name: "UX Design: From Concept to Prototype",
    issuer: "University of Michigan",
    issueDate: "May 2024",
    logo: Michigan,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/PH98RHCSLBWX",
  },
  {
    name: "UX Research at Scale: Surveys, Analytics, Online Testing",
    issuer: "University of Michigan",
    issueDate: "May 2024",
    logo: Michigan,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/KEQ36H8UMPSM",
  },
  {
    name: "User Experience Research and Design Specialization",
    issuer: "University of Michigan",
    issueDate: "May 2024",
    logo: Michigan,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/YNKVEWHQCW5Z",
  },
  {
    name: "Project Management Principles and Practices Specialization",
    issuer: "University of California, Irvine",
    issueDate: "Jan 2024",
    logo: California,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/2X4SUPX2CSXK",
  },
  {
    name: "Academic English: Writing Specialization",
    issuer: "University of California, Irvine",
    issueDate: "Sep 2023",
    logo: California,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/9FPFR9CZX6QH",
  },
  {
    name: "CertNexus Certified Ethical Emerging Technologist Specialization",
    issuer: "CertNexus",
    issueDate: "May 2023",
    logo: CertNexus,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/LQK4VFZNB2GH",
  },
  {
    name: "Lean Software Development",
    issuer: "Coursera",
    issueDate: "Mar 2023",
    logo: Coursera,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/9FU5NDGKTND8",
  },
  {
    name: "Agile Software Development",
    issuer: "Coursera",
    issueDate: "Mar 2023",
    logo: Coursera,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/EQFSXN89WSYD",
  },
  {
    name: "Software Development Lifecycle",
    issuer: "Coursera",
    issueDate: "Mar 2023",
    logo: Coursera,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/MCPXAZMN5TEK",
  },
  {
    name: "Software Development Processes and Methodologies",
    issuer: "Coursera",
    issueDate: "Mar 2023",
    logo: Coursera,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/SLHJNYKBZWG8",
  },
  {
    name: "Web Design for Everybody: Basics of Web Development & Coding Specialization",
    issuer: "University of Michigan",
    issueDate: "Dec 2022",
    logo: Michigan,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/BQ858LY8WRX7",
  },
  {
    name: "Computer Communications Specialization",
    issuer: "University of Colorado System",
    issueDate: "Aug 2022",
    logo: Colorado,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/WPSWYLBB5HBW",
  },
  {
    name: "Academic Skills for University Success Specialization",
    issuer: "The University of Sydney",
    issueDate: "Mar 2022",
    logo: Sydney,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/T98WQG5XEEHK",
  },
];

export { technologies, projects, experiences, certifications };
