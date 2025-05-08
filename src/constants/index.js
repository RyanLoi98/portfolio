// This index.js file contains the constants (things like text descriptions, pictures etc) that will be used throughout the application, this makes changes easier
// as it will be done all in one spot.

import { color } from "framer-motion";
import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  docker,
  uofclogo,
  AlbertaGovLogo,
  educationmatterslogo,
  AdvanceHairSalonLogo,
  MustardSeedLogo,
  EPScarlettLogo,
  github,
  python,
  java,
  c,
  swift,
  arm64,
  threejs,
  firebase,
  mysql,
  npm,
  postman,
  gitlab,
  filezilla,
  vsc,
  intellij,
  pycharm,
  clion,
  webstorm,
  datagrip,
  mysqlworkbench,
  mongodbcompass,
  vercel,
  cloudinary,
  windows,
  ubuntu,
  macos,
  selfcheckout1,
  portfolio,
  colourability,
  HobbyHub,
  reactbootstrap,
  formik,
  sass,
  nodemon,
  expressjs,
  HairSalonDatabase,


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
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const education = [
  {
    title: "B.S.c Computer Science",
    institution: "University of Calgary",
    icon: uofclogo,
    date: "September 2021 - April 2025",
    gpa: "3.9/4.0",
    points: [
      "Graduated with Distinction",
      "Participated in Hackathons to enhance problem-solving skills",
    ],
    coursework: [
      "Data Structures and Algorithms",
      "Design and Analysis of Algorithms",
      "Software Engineering and Software Architecture (testing, design, clean code, Agile, Waterfall, Spiral models)",
      "Web Development",
      "Database Management Systems",
      "Computer Networking",
      "Human-Computer Interaction (UI/UX design and usability)",
      "Human-Robot Interaction",
    ],
    titleSize: "",
    link: "https://calendar.ucalgary.ca/programs/CPSCBSC",
  },

  {
    title: "B.S.c Cellular Molecular Microbial Biology",
    institution: "University of Calgary",
    icon: uofclogo,
    date: "Sept 2016 - Dec 2020",
    gpa: "3.7/4.0",
    points: [
      "Graduated with Distinction",
      "Worked in large research teams conducting experiments and analyzing microbial data",
      "Contributed to scientific research projects, assisting with data collection and interpretation",
      "Learned how to prepare and edit grant proposals for research funding",
      "Developed skills in academic writing, including research papers and laboratory reports",
    ],
    coursework: [],
    titleSize: "text-[19px]",
    link: "https://calendar.ucalgary.ca/programs/CMBIBSC",
  },
];

const awards = [
  {
    title: "Alberta New Beginnings Bursary",
    icon: AlbertaGovLogo,
    date: "2022",
    points: [],
    link: "https://studentaid.alberta.ca/scholarships/new-beginnings-bursary/",
  },

  {
    title: "Jason Lang scholarship",
    icon: AlbertaGovLogo,
    date: "2017, 2019",
    points: [],
    link: "https://studentaid.alberta.ca/scholarships/jason-lang-scholarship/",
  },

  {
    title: "Alexander Rutherford Scholarship",
    icon: AlbertaGovLogo,
    date: "2016",
    points: [],
    link: "https://studentaid.alberta.ca/scholarships-and-awards/alexander-rutherford-scholarship/",
  },

  {
    title: "Hal Winlaw Health and Nutrition Legacy Award",
    icon: educationmatterslogo,
    date: "2016",
    points: ["Sole Recipient in Alberta"],
    link: "https://www.educationmatters.ca/awards/hal-winlaw-health-nutrition-legacy-award/",
  },

  {
    title: "Dean’s list",
    icon: uofclogo,
    date: "2018-2020",
    points: [],
    link: "https://science.ucalgary.ca/about/excellence-and-awards/deans-list",
  },
];

const experiences = [
  {
    title: "Customer Experience & Administrative Lead",
    company_name: "Advance Hair Salon (Calgary, Canada)",
    icon: AdvanceHairSalonLogo,
    iconBg: "#525c82",
    date: "July 2013 - May 2024",
    duration: "10 years, 10 months",
    points: [
      "Delivered outstanding front-desk service by responding to client inquiries, coordinating high-volume appointment schedules, and cultivating a welcoming environment for all guests.",
      "Upheld salon cleanliness by supervising sanitation protocols, laundering towels, and arranging workstations to exceed health and safety standards.",
      "Streamlined supply chain operations by ordering salon products, monitoring inventory levels, and liaising with vendors to optimize cost efficiency.",
      "Administered daily financial tasks, including cash reconciliation, transaction accuracy, and bookkeeping to support reliable financial documentation.",
      "Facilitated onboarding and mentorship for new staff, training them on internal procedures, client engagement best practices, and POS systems.",
      "Orchestrated weekly staff meetings to align team goals, set measurable performance benchmarks, and promote a culture of collaboration and accountability.",
    ],
  },
];

const volunteering = [
  {
    Organization: "The Mustard Seed",
    icon: MustardSeedLogo,
    Position: "Food Bank and Shelter Volunteer",
    points: [
      "Packaged and distributed 15+ food hampers bi-weekly to low-income clients while maintaining confidentiality to uphold the dignity of clientele.",
      `Supervised the computer lab and provided hands-on instruction to 5-10 clients, teaching essential skills such as email composition, 
      internet navigation, printer usage, and Microsoft Excel/Word to improve digital literacy.`,
    ],
    link: "https://theseed.ca/",
  },

  {
    Organization: "The Mustard Seed",
    icon: MustardSeedLogo,
    Position: "Shelter Kitchen Helper",
    points: [
      "Worked collaboratively to prepare and serve meals for 50-100 shelter residents per day, ensuring a warm and respectful dining experience.",
      "Assisted in assembling hundreds of takeaway food bags, supporting community hunger relief efforts.",
    ],
    link: "https://theseed.ca/",
  },

  {
    Organization: "Dr. E.P. Scarlett High School",
    icon: EPScarlettLogo,
    Position: "Peer Tutor and Volunteering Club Member",
    points: [
      "Tutored elementary students in math and reading, helping them build confidence and improve their academic skills.",
      "Led fundraising efforts, securing donations to assemble 10–20+ food hampers (20+ lbs each) for food bank distribution.",
      'Coordinated the "Save the Tigers" fundraiser, successfully raising funds to support endangered tiger conservation.',
    ],
    link: "https://drepscarlett.cbe.ab.ca/",
  },
];

const technologies = {
  languages: [
    {
      name: "JavaScript",
      icon: javascript,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Python 3",
      icon: python,
      link: "https://www.python.org/",
    },
    {
      name: "Java",
      icon: java,
      link: "https://www.oracle.com/java/",
    },
    {
      name: "C",
      icon: c,
      link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
      name: "Swift",
      icon: swift,
      link: "https://developer.apple.com/swift/",
    },
    {
      name: "ARM64 Assembly",
      icon: arm64,
      link: "https://developer.arm.com/documentation/",
    },
  ],

  frontend: [
    {
      name: "HTML5",
      icon: html,
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: css,
      link: "https://www.w3.org/Style/CSS/",
    },
    {
      name: "React.js",
      icon: reactjs,
      link: "https://react.dev/",
    },
    {
      name: "React Bootstrap",
      icon: reactbootstrap,
      link: "https://react-bootstrap.netlify.app/",
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      link: "https://tailwindcss.com/",
    },
    {
      name: "SASS",
      icon: sass,
      link: "https://sass-lang.com/",
    },
    {
      name: "Three.js",
      icon: threejs,
      link: "https://threejs.org/",
    },
    {
      name: "Formik",
      icon: formik,
      link: "https://formik.org/",
    },
    {
      name: "Figma",
      icon: figma,
      link: "https://www.figma.com/",
    },
  ],

  backend: [
    {
      name: "Node.js",
      icon: nodejs,
      link: "https://nodejs.org/",
    },
    {
      name: "Firebase",
      icon: firebase,
      link: "https://firebase.google.com/",
    },
    {
      name: "MongoDB",
      icon: mongodb,
      link: "https://www.mongodb.com/",
    },
    {
      name: "mySQL",
      icon: mysql,
      link: "https://www.mysql.com/",
    },
    {
      name: "expressjs",
      icon: expressjs,
      link: "https://expressjs.com/",
    },
    {
      name: "nodemon",
      icon: nodemon,
      link: "https://nodemon.io/",
    },
  ],

  devtools: [
    {
      name: "Docker",
      icon: docker,
      link: "https://www.docker.com/",
    },
    {
      name: "NPM",
      icon: npm,
      link: "https://www.npmjs.com/",
    },
    {
      name: "Postman",
      icon: postman,
      link: "https://www.postman.com/",
    },
    {
      name: "GitHub",
      icon: github,
      link: "https://github.com/",
    },
    {
      name: "GitLab",
      icon: gitlab,
      link: "https://about.gitlab.com/",
    },
    {
      name: "FileZilla",
      icon: filezilla,
      link: "https://filezilla-project.org/",
    },
    {
      name: "Visual Studio Code",
      icon: vsc,
      link: "https://code.visualstudio.com/",
    },
    {
      name: "IntelliJ",
      icon: intellij,
      link: "https://www.jetbrains.com/idea/",
    },
    {
      name: "PyCharm",
      icon: pycharm,
      link: "https://www.jetbrains.com/pycharm/",
    },
    {
      name: "CLion",
      icon: clion,
      link: "https://www.jetbrains.com/clion/",
    },
    {
      name: "WebStorm",
      icon: webstorm,
      link: "https://www.jetbrains.com/webstorm/",
    },
    {
      name: "DataGrip",
      icon: datagrip,
      link: "https://www.jetbrains.com/datagrip/",
    },
    {
      name: "MySqlWorkbench",
      icon: mysqlworkbench,
      link: "https://www.mysql.com/products/workbench/",
    },
    {
      name: "MonogDBCompass",
      icon: mongodbcompass,
      link: "https://www.mongodb.com/products/tools/compass",
    },
  ],

  cloud: [
    {
      name: "Vercel",
      icon: vercel,
      link: "https://vercel.com/",
    },
    {
      name: "Cloudinary",
      icon: cloudinary,
      link: "https://cloudinary.com/",
    },
  ],

  operatingSystems: [
    {
      name: "Windows",
      icon: windows,
      link: "https://www.microsoft.com/en-us/windows",
    },
    {
      name: "Ubuntu",
      icon: ubuntu,
      link: "https://ubuntu.com/",
    },
    {
      name: "macOS",
      icon: macos,
      link: "https://www.apple.com/macos/",
    },
  ],
};

const projects = [
  {
    name: "Software Developer Portfolio",
    description: `A responsive, full-featured personal software developer portfolio built with React, Vite, and TailwindCSS, showcasing personal projects, 
    work experience, education, technical skills, and more. Integrated with Three.js and Framer Motion for interactive 3D visuals and 
    smooth animations. Includes a secure contact form using EmailJS and Google reCAPTCHA, with form validation handled via Regex. Designed 
    for accessibility and performance, the app is responsive down to 300px and capped at 320px for optimal readability on all devices`,
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "orange-text-gradient",
      },
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient",
      },
      {
        name: "EmailJS",
        color: "pink-text-gradient",
      },
      {
        name: "Regex",
        color: "orange-text-gradient",
      },
      {
        name: "Google reCAPTCHA",
        color: "blue-text-gradient",
      },
      {
        name: "React Router",
        color: "green-text-gradient",
      },
      {
        name: "Vercel",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/RyanLoi98/portfolio",
    live_site_link: "https://portfolio-ryanloidevs-projects.vercel.app/",
    youtube_link: "",
  },

  {
    name: "HobbyHub",
    description: `Hobby Hub is a React-based platform for hobbyists to connect, share, and trade collectibles. 
    Unlike forums or Reddit, it integrates a built-in marketplace, reducing risks of dealing with unknown sellers. 
    Built with React, MongoDB, Express.js, Bootstrap, Cloudinary, and Docker, key challenges included managing large 
    user data, interactions, and implementing an intuitive moderation system. Currently in beta stage.`,
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Sass/Scss",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "orange-text-gradient",
      },
      {
        name: "React Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "React Router Dom",
        color: "green-text-gradient",
      },
      {
        name: "React-Responsive",
        color: "pink-text-gradient",
      },
      {
        name: "mongoose",
        color: "orange-text-gradient",
      },
      {
        name: "nodemon",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "Formik",
        color: "pink-text-gradient",
      },
      {
        name: "yup",
        color: "orange-text-gradient",
      },
      {
        name: "JsonWebToken",
        color: "blue-text-gradient",
      },
      {
        name: "Cookie-parser",
        color: "green-text-gradient",
      },
      {
        name: "React-icons",
        color: "pink-text-gradient",
      },
      {
        name: "libphonenumber-js",
        color: "orange-text-gradient",
      },
      {
        name: "react-phone-input-2",
        color: "blue-text-gradient",
      },
    ],
    image: HobbyHub,
    source_code_link: "https://github.com/RyanLoi98/HobbyHub",
    live_site_link: "",
    youtube_link: "https://www.youtube.com/watch?v=QE0Vf02w0C8&feature=youtu.be",
  },

  {
    name: "Hair Salon Database",
    description: `Hair Salon Database is a full-stack system built to streamline daily operations for a salon business. It 
    manages everything from inventory and pricing to employees, clients, expenses, suppliers, and transactions. Developed 
    with React, MySQL, Express.js, Bootstrap, and Node.js, the system features a secure, connected front-end and back-end 
    architecture, complete with a normalized relational database. Built collaboratively by a team of three for our Fall 2023 
    CPSC 471 Database Management Systems course, this project tackles challenges such as scalable schema design, sensitive data 
    handling (e.g., payments, accounts), and CRUD operations across multiple tables.`,
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "React Bootstrap",
        color: "orange-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "React-Router-Dom",
        color: "pink-text-gradient",
      },
      {
        name: "React-Icons",
        color: "orange-text-gradient",
      },
      {
        name: "Axios",
        color: "blue-text-gradient",
      },
    ],
    image: HairSalonDatabase,
    source_code_link: "https://github.com/RyanLoi98/HairSalonDatabase",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Self Checkout Station",
    description: `A Java and Java Swing-based self-checkout system developed as part of a software engineering course. 
    The project features item scanning, total calculations, payment integration, receipt printing, and inventory management. 
    JUnit testing was utilized to ensure reliability. Designed to teach event listener design techniques, object-oriented programming, and teamwork within a 
    large group of over 25 people, the project presented challenges in coordination and time management but was successfully completed as a one-off project.`,
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Java Swing",
        color: "green-text-gradient",
      },
      {
        name: "JUnit",
        color: "pink-text-gradient",
      },
      {
        name: "Object-Oriented Programming",
        color: "orange-text-gradient",
      },
      {
        name: "Event Listeners",
        color: "blue-text-gradient",
      },
      {
        name: "Teamwork",
        color: "green-text-gradient",
      },
      {
        name: "Software Engineering",
        color: "pink-text-gradient",
      },
    ],
    image: selfcheckout1,
    source_code_link: "https://github.com/RyanLoi98/Self-Checkout-Station",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Graph 3-Colourability via SAT",
    description: `This program was developed as part of my CPSC 413 (Design and Analysis of Algorithms I - Winter 2024) 
    course, and solves the graph 3-colourability problem by reducing it to SAT using the PySAT library. 
    It determines whether a given undirected graph (represented as an adjacency matrix) can be coloured using 3 colours 
    (Red, Green, Blue) such that no two adjacent vertices share the same colour. The core logic is implemented in the 
    colourSAT.py file utilizing PySAT's SAT solver and mathematical reductions learned in lecture. Essentially you would 
    give this python3 function an input graph and it will return a boolean (true or false) indicating whether the input 
    graph is 3-colorable`,
    tags: [
      {
        name: "Python3",
        color: "blue-text-gradient",
      },
      {
        name: "PySAT",
        color: "green-text-gradient",
      },
      {
        name: "Design and Analysis of Algorithms",
        color: "pink-text-gradient",
      },
      {
        name: "3-colourability",
        color: "orange-text-gradient",
      },
      {
        name: "Graphs",
        color: "blue-text-gradient",
      },
    ],
    image: colourability,
    source_code_link: "https://github.com/RyanLoi98/CPSC413A4",
    live_site_link: "",
    youtube_link: "",
  },
];

export { education, awards, experiences, volunteering, technologies, projects };
