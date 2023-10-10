import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  quanta,
  ateneo,
  tailwind,
  ateneo2,
  threejs,
  tripguide,
  typescript,
  web,
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
    title: "Java, Python Developer",
    icon: web,
  },
  {
    title: "React/Angular Developer",
    icon: mobile,
  },
  {
    title: "Fullstack Developer",
    icon: backend,
  },
  {
    title: "3D Design",
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
    title: "Internship - Software Automation",
    company_name: "Liceo Ateneo Victoria",
    icon: ateneo,
    iconBg: "#383E56",
    date: "2020 - 2021 (6 mounths)",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "My university internship was an application in Android Studio (JAVA) of applications in conjunction with Java/XML programming connect with Firebase (database no relational). and C++ (Arduino).",
      "“Domotica Project” was created in object-oriented programming and designed with XML. (GIT)."
    ],
  },
  {
    title: "Computer Teacher",
    company_name: "Liceo Ateneo Victoria",
    icon: ateneo2,
    iconBg: "#383E56",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Teaching planning oriented in the area of programming/design (Javascript, HTML, CSS).",
      "I taught Python to my students when I was worked as a teacher with some logic projects.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Quanta Computer",
    icon: quanta,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Support the enterprise warehouse database system and verify the warehouse database (SQL).",
      "Creating dashboards in Javascript/HTML/CSS for network graphs in D3/Javascript.",
      "Practice Java, Spring boot, Javascript, postman and MYSQL database with some mini projects.",
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Old Portfolio",
    description:
      "My first portfolio created in HTML, CSS and Javascript, this one took me about 1 week to do in which I started creating personal projects by myself",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Wenzeltelger/Personal-Portfolio-1.0",
  },
  {
    name: "Android App",
    description:
      "An application in Android Studio (JAVA) of applications in conjunction with Java/XML programming connect with Firebase (database no relational). and C++ (Arduino).",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "XML",
        color: "green-text-gradient",
      },
      {
        name: "Database",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { experiences, projects, services, technologies, testimonials };

