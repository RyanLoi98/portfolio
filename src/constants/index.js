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
  CoinGame,
  MaxSubArray,
  ClassScheduler,
  Glitch,
  GuardianAngel,
  CreativePhoneUnlock,
  Taleof2Buttons,
  QuizWhiz,
  JobHub,
  LibraryKiosk,
  ProducerConsumer,
  DiningPhilosopherandIPC,
  TCPClientServerFileTransfer,
  EFTP,
  TicTacToe,
  MvH,
  editor,
  Geo,
  Graphing,
  StarPlotter,
  Huffman,
  Shell,
  Expertz,
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
    date: "Sept 2012 - May 2024",
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
    {
      name: "Glitch",
      icon: Glitch,
      link: "https://glitch.com/",
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
      {
        name: "Web Development",
        color: "orange-text-gradient",
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
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "Web Development",
        color: "pink-text-gradient",
      },
    ],
    image: HobbyHub,
    source_code_link: "https://github.com/RyanLoi98/HobbyHub",
    live_site_link: "",
    youtube_link: "https://youtu.be/QE0Vf02w0C8",
  },

  {
    name: "Expertz",
    description: `Expertz is a Swift-based iOS application connecting skilled professionals with clients. 
    The platform provides a seamless, location-driven experience to discover, chat with, and securely pay 
    verified experts across a range of services. Built with Apple MapKit, Google Firebase, and Core Location, 
    Expertz features a verified review system (restricted to paying clients only), unbiased search results, and 
    an AliExpress-style escrow payment system. The app is currently in development with a working version featuring many 
    of the promised features and has ongoing improvements.`,
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "SwiftUI",
        color: "green-text-gradient",
      },
      {
        name: "UIKit",
        color: "pink-text-gradient",
      },
      {
        name: "Core Location",
        color: "orange-text-gradient",
      },
      {
        name: "MapKit",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase Authentication",
        color: "green-text-gradient",
      },
      {
        name: "Firestore",
        color: "pink-text-gradient",
      },
      {
        name: "Mobile Development",
        color: "orange-text-gradient",
      },
      {
        name: "IOS Development",
        color: "blue-text-gradient",
      },
    ],
    image: Expertz,
    source_code_link: "https://github.com/RyanLoi98/Expertz",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Job Hub",
    description: `Job Hub is a full-stack job board web application developed for SENG 401 (Winter 2024), designed to connect job seekers with employers. 
  Built with React, Express.js, Node.js, React Bootstrap, JWT, and MongoDB, it follows a REST API and MVC architecture to ensure scalability and modularity. 
  The platform enables users to post, search, and apply for jobs with ease. Comprehensive testing was implemented using Jest and Selenium, 
  ensuring both backend reliability and frontend usability. Key challenges included maintaining secure authentication, seeding realistic data, 
  and supporting seamless interaction between multiple user roles.`,

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
        name: "Bootstrap",
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
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "mongoose",
        color: "orange-text-gradient",
      },
      {
        name: "Rest API",
        color: "blue-text-gradient",
      },
      {
        name: "MVC Architecture",
        color: "green-text-gradient",
      },
      {
        name: "Jest",
        color: "pink-text-gradient",
      },
      {
        name: "Selenium",
        color: "orange-text-gradient",
      },
      {
        name: "JsonWebToken",
        color: "blue-text-gradient",
      },
      {
        name: "Software Engineering",
        color: "green-text-gradient",
      },
      {
        name: "Web Development",
        color: "pink-text-gradient",
      },
    ],
    image: JobHub,
    source_code_link: "https://github.com/RyanLoi98/JobHub",
    live_site_link: "",
    youtube_link: "https://youtu.be/Hv54rzyEkJE",
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
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "Web Development",
        color: "pink-text-gradient",
      },
    ],
    image: HairSalonDatabase,
    source_code_link: "https://github.com/RyanLoi98/HairSalonDatabase",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Guardian Angel",
    description: `Guardian Angel is a proxemics web application designed for my CPSC 581 (Human-Computer Interaction II - Fall 2024) course. The 
    concept was inspired by my grandmother, who faced mobility and vision challenges due to Parkinson's, arthritis, and cataracts. The 
    app includes features like fall detection, sleep fall prevention, object detection, and anti-theft mode, aimed at improving safety 
    and independence for users: with mobility issues, vision challenges, and require more assistance like my grandmother.`,
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Proxemics",
        color: "orange-text-gradient",
      },
      {
        name: "js-aruco2",
        color: "blue-text-gradient",
      },
      {
        name: "Glitch",
        color: "green-text-gradient",
      },
      {
        name: "Human Computer Interaction II",
        color: "pink-text-gradient",
      },
      {
        name: "Web Development",
        color: "orange-text-gradient",
      },
    ],
    image: GuardianAngel,
    source_code_link: "https://github.com/RyanLoi98/GuardianAngel",
    live_site_link: "https://guardianangel.vercel.app/",
    youtube_link: "https://www.youtube.com/watch?v=8Nj8ePU1TnI",
  },

  {
    name: "Creative Phone unlock",
    description: `Creative Phone Unlock was developed for my course CPSC 581 (Human Computer Interaction II - Fall 2024) 
    Assignment 2, with the goal of creating a imaginative and creative phone unlock utilizing as many phone sensors as possible. 
    The system incorporates ambient light sensing, gyroscope orientation data, and camera-based machine vision hand gesture 
    recognition (via Google media pipe) to create multi-step authentication challenges that prevent accidental and unauthorized device unlocks.`,
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Vision",
        color: "orange-text-gradient",
      },
      {
        name: "Phone Sensors",
        color: "blue-text-gradient",
      },
      {
        name: "Glitch",
        color: "green-text-gradient",
      },
      {
        name: "Human Computer Interaction II",
        color: "pink-text-gradient",
      },
      {
        name: "Web Development",
        color: "orange-text-gradient",
      },
    ],
    image: CreativePhoneUnlock,
    source_code_link: "https://github.com/RyanLoi98/CreativePhoneUnlock",
    live_site_link: "https://creative-phone-unlock.vercel.app/",
    youtube_link: "https://www.youtube.com/watch?v=tJ-h8diWiFg",
  },

  {
    name: "A Tale of 2 Buttons",
    description: `This is a web application designed to offer a fun and creative way to explore a person's emotional connections 
    we have with food, particularly ramen. The game challenges players to create a personalized ramen bowl using two simple buttons, each representing 
    a choice with unique consequences. The twist? Players must manage their budget while making these decisions, adding an element of strategy and realism 
    to the experience. This project was developed as part of the CPSC 581 Human-Computer Interaction II (Fall 2024) course, with a focus on imaginative and 
    user-friendly design, and a unique gameplay experience that tells an inspiring story with just two buttons.`,
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Glitch",
        color: "orange-text-gradient",
      },
      {
        name: "Human Computer Interaction II",
        color: "blue-text-gradient",
      },
      {
        name: "Web Development",
        color: "green-text-gradient",
      },
    ],
    image: Taleof2Buttons,
    source_code_link: "https://github.com/RyanLoi98/ATaleof2Buttons",
    live_site_link: "https://a-taleof2-buttons.vercel.app/",
    youtube_link: "https://youtu.be/PXKVLONcRb4",
  },

  {
    name: "QuizWhiz",
    description: `Built for SENG 513 - Web-Based Systems (Winter 2024), QuizWhiz is an interactive quiz web application that allows 
    users to play a 10 question quiz game with random questions taken from an online trivia database featuring easy, medium, and 
    hard questions from entertainment, video games, history, science, geography, modern pop culture and much more. Designed with 
    user experience and educational engagement in mind, it supports: a multiple choice approach, scoring, and a high score arcade 
    style tracking system — all built with vanilla JavaScript, HTML5, and CSS3. "Whether you're a teenager looking to pass the time 
    or an adult eager to challenge your friends with fun and quirky trivia, QuizWhiz has something for everyone!"`,
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Vercel",
        color: "orange-text-gradient",
      },
      {
        name: "Web-Based Systems",
        color: "blue-text-gradient",
      },
      {
        name: "Open Trivia Database API",
        color: "green-text-gradient",
      },
      {
        name: "Web Development",
        color: "pink-text-gradient",
      },
    ],
    image: QuizWhiz,
    source_code_link: "https://github.com/RyanLoi98/QuizWhiz",
    live_site_link: "https://quiz-whiz-three.vercel.app/",
    youtube_link: "",
  },

  {
    name: "Library Kiosk",
    description: `This project was developed as part of CPSC 481 (Fall 2023), a Human-Computer Interaction (HCI) course at the University of Calgary. 
    The goal was to design and prototype a creative, intuitive, and user-friendly front-end interface. We chose to rebuild the Calgary Public Library’s 
    interactive front-end kiosk system focusing on improving usability and accessibility. This is a front-end only application with no back-end implementation, 
    ensuring a direct focus on HCI design principles. Note: this project is designed to be used on fixed kiosks with a 16:9 aspect ratio and a minimum screen size of 1920x1080 pixels.`,
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Vercel",
        color: "orange-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "React Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "React Router Dom",
        color: "pink-text-gradient",
      },
      {
        name: "Human Computer Interaction",
        color: "orange-text-gradient",
      },
      {
        name: "Web Development",
        color: "blue-text-gradient",
      },
    ],
    image: LibraryKiosk,
    source_code_link: "https://github.com/RyanLoi98/LibraryKiosk",
    live_site_link: "https://library-kiosk-mu.vercel.app/",
    youtube_link: "https://youtu.be/8AlpN_8Rhks",
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
        name: "Graphs",
        color: "blue-text-gradient",
      },
      {
        name: "3-colourability",
        color: "orange-text-gradient",
      },
      {
        name: "Design and Analysis of Algorithms",
        color: "pink-text-gradient",
      },
    ],
    image: colourability,
    source_code_link: "https://github.com/RyanLoi98/CPSC413A4",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Optimal Coin Game",
    description: `This is my CPSC 413 (Design and Analysis of Algorithms I - Winter 2024) assignment 3 question #3 at the 
    University of Calgary. This Program implements a dynamic programming solution to the classic two-player optimal 
    coin-picking game. Given an array of coin values, this Python 3 program determines the best strategy for the current 
    player to maximize their winnings assuming both players play optimally. The core logic is implemented in the Game class 
    using memoization to avoid redundant subproblem calculations. The function returns three key pieces of information: the 
    maximum sum the current player can achieve, the margin of victory (or loss), and whether the optimal first move is to 
    take the coin on the left or the right.`,
    tags: [
      {
        name: "Python3",
        color: "blue-text-gradient",
      },
      {
        name: "Dynamic Programming",
        color: "green-text-gradient",
      },
      {
        name: "memoization",
        color: "pink-text-gradient",
      },
      {
        name: "Recursion",
        color: "orange-text-gradient",
      },
      {
        name: "Design and Analysis of Algorithms",
        color: "blue-text-gradient",
      },
    ],
    image: CoinGame,
    source_code_link: "https://github.com/RyanLoi98/CPSC413A3",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Recursive Maximum Subarray Sum",
    description: `This is my solution to Assignment 2, Question #4 for CPSC 413 (Design and Analysis of Algorithms I - Winter 2024) 
    at the University of Calgary. This program implements a recursive algorithm—as taught in lecture for computing the maximum possible 
    sum of any contiguous subarray that lies entirely between a defined start and end index (inclusive). It follows the 
    divide-and-conquer strategy from lecture and intentionally avoids optimizations such as dynamic programming or removing recursive 
    calls, as per assignment instructions.`,
    tags: [
      {
        name: "Python3",
        color: "blue-text-gradient",
      },
      {
        name: "Recursion",
        color: "green-text-gradient",
      },
      {
        name: "Divide and Conquer",
        color: "pink-text-gradient",
      },
      {
        name: "Arrays",
        color: "orange-text-gradient",
      },
      {
        name: "Design and Analysis of Algorithms",
        color: "blue-text-gradient",
      },
    ],
    image: MaxSubArray,
    source_code_link: "https://github.com/RyanLoi98/CPSC413A2",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Class Scheduler",
    description: `This is my solution to Assignment 1, Question #5 for CPSC 413 (Design and Analysis of Algorithms I - Winter 2024) 
    at the University of Calgary. The problem in this program revolves around scheduling classes at a hypothetical "Chaos University" 
    and goes as follows: At Chaos University, class schedules are chaotic — they can start and end at arbitrary times during the week. 
    As a student who wants to attend as many classes as possible (and doesn't care which), your goal is to choose the maximum number of 
    non-overlapping classes between the time you arrive on campus and the time you leave for work, ensuring at least 10 units of time 
    between any two classes to allow for commuting across campus.`,
    tags: [
      {
        name: "Python3",
        color: "blue-text-gradient",
      },
      {
        name: "Interval Scheduling",
        color: "green-text-gradient",
      },
      {
        name: "Greedy Algorithms",
        color: "pink-text-gradient",
      },
      {
        name: "Sorting",
        color: "orange-text-gradient",
      },
      {
        name: "Design and Analysis of Algorithms",
        color: "blue-text-gradient",
      },
    ],
    image: ClassScheduler,
    source_code_link: "https://github.com/RyanLoi98/CPSC413A1",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Dining Philosophers and IPC",
    description: `This is my CPSC 457 (Operating Systems - Fall 2023) assignment exploring concurrency, synchronization, and inter-process communication (IPC) 
    through the implementation of the Dining Philosophers problem in a simulated environment. The project focuses on using semaphores, shared memory, and 
    message queues to demonstrate process coordination, prevent deadlock, and handle race conditions in a concurrent system. This assignment is split into 2 sections.
    Section 1 explores IPC creation, and communication using shared memory and message queues. Section 2 tackles the classical dining philosophers problem.`,
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "IPC",
        color: "green-text-gradient",
      },
      {
        name: "Synchronization",
        color: "pink-text-gradient",
      },
      {
        name: "POSIX Threads",
        color: "orange-text-gradient",
      },
      {
        name: "Zombie Processes",
        color: "blue-text-gradient",
      },
      {
        name: "Concurrency",
        color: "green-text-gradient",
      },
      {
        name: "Race Condition",
        color: "pink-text-gradient",
      },
      {
        name: "Semaphores",
        color: "orange-text-gradient",
      },
      {
        name: "Mutual Exclusion",
        color: "blue-text-gradient",
      },
      {
        name: "Deadlock",
        color: "green-text-gradient",
      },
      {
        name: "Principles of Operating Systems",
        color: "pink-text-gradient",
      },
    ],
    image: DiningPhilosopherandIPC,
    source_code_link:
      "https://github.com/RyanLoi98/Dining-Philosopher-and-IPC-Simulation",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Producer Consumer",
    description: `This is my CPSC 457 (Operating Systems - Fall 2023) assignment exploring synchronization and concurrency through 
    the Producer-Consumer problem modeled through a hypothetical ballon stand at a carnival. The implementation focuses on correctly using semaphores, threads, and bounded buffers 
    to avoid race conditions and simulate a coordinated, multithreaded system. Part 1 implements a single bounded buffer, one producer, one consumer, 
    mutual exclusion, and the user controls the simulation. Part 2 implements two bounded buffers, two producer threads, three consumer threads, and 
    everything is running automatically.`,
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "Producer Consumer",
        color: "green-text-gradient",
      },
      {
        name: "Multi-threading",
        color: "pink-text-gradient",
      },
      {
        name: "Synchronization",
        color: "orange-text-gradient",
      },
      {
        name: "Critical Section",
        color: "blue-text-gradient",
      },
      {
        name: "Zombie Processes",
        color: "green-text-gradient",
      },
      {
        name: "POSIX Threads",
        color: "pink-text-gradient",
      },
      {
        name: "Concurrency",
        color: "orange-text-gradient",
      },
      {
        name: "Race Condition",
        color: "blue-text-gradient",
      },
      {
        name: "Semaphores",
        color: "green-text-gradient",
      },
      {
        name: "Mutual Exclusion",
        color: "pink-text-gradient",
      },
      {
        name: "Deadlock",
        color: "orange-text-gradient",
      },
      {
        name: "Principles of Operating Systems",
        color: "blue-text-gradient",
      },
    ],
    image: ProducerConsumer,
    source_code_link: "https://github.com/RyanLoi98/ProducerConsumer",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "TCP Client-Server File Transfer",
    description: `This is my CPSC 441 (Computer Networks - Winter 2023) assignment. This project demonstrates robust TCP 
    socket programming in C by building a client-server system that performs: User authentication computed via a custom protocol 
    using a UCID and server timestamp. Secure file transfer from the server to the client only upon successful authentication of 
    the created passcode. This assignment showcases understanding of TCP networking fundamentals, system calls (socket, bind, listen, 
    accept, connect, send, recv), error handling, string parsing, and basic protocol design. `,
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "TCP",
        color: "green-text-gradient",
      },
      {
        name: "Sockets",
        color: "pink-text-gradient",
      },
      {
        name: "Networks",
        color: "orange-text-gradient",
      },
      {
        name: "Client-Server",
        color: "blue-text-gradient",
      },
      {
        name: "Computer Networks",
        color: "green-text-gradient",
      },
    ],
    image: TCPClientServerFileTransfer,
    source_code_link:
      "https://github.com/RyanLoi98/TCPClientServerFileTransfer",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Easy File Transfer Protocol (EFTP)",
    description: `This is my CPSC 441 (Computer Networks - Winter 2023) assignment. This project implements the Easy File Transfer Protocol 
    (EFTP), a lightweight and custom-designed file transfer protocol built on UDP sockets. Unlike TCP, UDP provides no reliability guarantees, 
    so this project includes manual implementations of: Reliable delivery (ACKs, retransmissions, timeouts), Packet sequencing, Authentication 
    and session handling, This assignment demonstrates knowledge of low-level networking concepts, protocol design, and C socket programming using UDP.`,
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "UDP",
        color: "green-text-gradient",
      },
      {
        name: "Sockets",
        color: "pink-text-gradient",
      },
      {
        name: "Networks",
        color: "orange-text-gradient",
      },
      {
        name: "Client-Server",
        color: "blue-text-gradient",
      },
      {
        name: "Easy File Transfer Protocol",
        color: "green-text-gradient",
      },
      {
        name: "Computer Networks",
        color: "pink-text-gradient",
      },
    ],
    image: EFTP,
    source_code_link: "https://github.com/RyanLoi98/EFTP",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Monsters Versus Heroes Map Maker",
    description: `This is my CPSC 233 (Intro Into Computer Science - Winter 2022) assignment 3. This project is an Object-Oriented Java-based Map 
    Making utility designed to support the Monsters vs Heroes simulation game (featured below). 
    The program allows users to build a custom game world interactively and then save it to a file in the correct format for simulation. 
    It reinforces object-oriented design and GUI programming through: Object creation and grid management, JavaFX GUI interface, User interaction 
    through input fields and buttons, File I/O operations for saving world files.
`,
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFX",
        color: "green-text-gradient",
      },
      {
        name: "GIT",
        color: "pink-text-gradient",
      },
      {
        name: "Object Oriented Programming",
        color: "orange-text-gradient",
      },
      {
        name: "Input/Output",
        color: "blue-text-gradient",
      },
      {
        name: "Introduction to Computer Science",
        color: "green-text-gradient",
      },
    ],
    image: editor,
    source_code_link: "https://github.com/RyanLoi98/MonstersVersusHeroesEditor",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Monsters Versus Heroes",
    description: `This is my CPSC 233 (Intro Into Computer Science - Winter 2022) assignment. This project is an object-oriented, 
    grid-based Monsters vs Heroes simulation written in Java. The game reads a world configuration from a file, places Heroes and 
    Monsters on a 2D grid, and runs a turn-based simulation of movement and combat. This assignment highlights key object-oriented programming (OOP) concepts including: 
    Encapsulation, Inheritance, and Polymorphism, Abstract classes and Interfaces, Enumerations for direction, symbols, and weapon types, 
    File I/O using java.io, Static methods and constants, Unit testing with JUnit 5`,
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JUnit 5",
        color: "green-text-gradient",
      },
      {
        name: "GIT",
        color: "pink-text-gradient",
      },
      {
        name: "Object Oriented Programming",
        color: "orange-text-gradient",
      },
      {
        name: "Encapsulation",
        color: "blue-text-gradient",
      },
      {
        name: "Inheritance",
        color: "green-text-gradient",
      },
      {
        name: "Abstract Classes",
        color: "pink-text-gradient",
      },
      {
        name: "Input/Output",
        color: "orange-text-gradient",
      },
      {
        name: "Polymorphism",
        color: "blue-text-gradient",
      },
      {
        name: "ENUMS",
        color: "green-text-gradient",
      },
      {
        name: "Introduction to Computer Science",
        color: "pink-text-gradient",
      },
    ],
    image: MvH,
    source_code_link: "https://github.com/RyanLoi98/MonstersVersusHeroes",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Tic Tac Toe",
    description: `This is my CPSC 233 (Intro Into Computer Science - Winter 2022) assignment. This assignment involved creating 
    a fully functional Tic Tac Toe game in Java using a procedural programming approach in order to learn the Java Syntax. 
    The entire logic is implemented within a single file, TicTacToe.java, using static functions only—no classes or objects. 
    The game also featured a GUI, and a simple "AI" opponent that is able to play against the user.
    In addition, unit testing was implemented using JUnit 5 in a separate file, TicTacToeTest.java, to verify the correctness of the game logic.`,
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JUnit 5",
        color: "green-text-gradient",
      },
      {
        name: "GIT",
        color: "pink-text-gradient",
      },
      {
        name: "Tic Tac Toe",
        color: "orange-text-gradient",
      },
      {
        name: "Testing",
        color: "blue-text-gradient",
      },
      {
        name: "Introduction to Computer Science",
        color: "green-text-gradient",
      },
    ],
    image: TicTacToe,
    source_code_link: "https://github.com/RyanLoi98/TicTacToe",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Huffman Compression",
    description: `This is my CPSC 231 (Intro Into Computer Science - Fall 2021) assignment 4. This assignment focused 
    on implementing Huffman Coding to compress ASCII text files using Python. Huffman Coding is a greedy algorithm that 
    assigns shorter binary codes to more frequent characters, producing optimal (minimal-byte) compression for single-character symbols. 
    Students were provided with a partially completed program and were required to complete two key classes: HuffmanTree and EncodingTable. 
    These classes encapsulate the structure and logic necessary for building a Huffman Tree, generating a binary encoding table, and compressing text.`,
    tags: [
      {
        name: "Python3",
        color: "blue-text-gradient",
      },
      {
        name: "Huffman Trees",
        color: "green-text-gradient",
      },
      {
        name: "GIT",
        color: "pink-text-gradient",
      },
      {
        name: "File I/O",
        color: "orange-text-gradient",
      },
      {
        name: "Greedy Algorithms",
        color: "blue-text-gradient",
      },
      {
        name: "Recursion",
        color: "green-text-gradient",
      },
      {
        name: "Object Oriented Programming",
        color: "pink-text-gradient",
      },
      {
        name: "Introduction to Computer Science",
        color: "orange-text-gradient",
      },
    ],
    image: Huffman,
    source_code_link: "https://github.com/RyanLoi98/Huffman-Compression",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Star Plotter",
    description: `This is my CPSC 231 (Intro Into Computer Science - Fall 2021) assignment 3. This assignment involved 
    developing a Python graphics application that reads data from star and constellation files to draw a map of the night 
    sky. Using the turtle graphics module, the program plots stars based on magnitude, names them (optionally), and connects 
    named stars with constellation edges. The project reinforces command-line argument handling, structured file I/O, 
    data-driven drawing, and modular program design.`,
    tags: [
      {
        name: "Python3",
        color: "blue-text-gradient",
      },
      {
        name: "Turtle",
        color: "green-text-gradient",
      },
      {
        name: "GIT",
        color: "pink-text-gradient",
      },
      {
        name: "File I/O",
        color: "orange-text-gradient",
      },
      {
        name: "CSV Parsing",
        color: "blue-text-gradient",
      },
      {
        name: "Introduction to Computer Science",
        color: "green-text-gradient",
      },
    ],
    image: StarPlotter,
    source_code_link: "https://github.com/RyanLoi98/Star-Plotter",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Graphing Calculator",
    description: `This is my CPSC 231 (Intro Into Computer Science - Fall 2021) assignment 2. This assignment involved implementing a 
    graphing calculator using Python 3 and the turtle graphics library. Building on concepts from Assignment 1 
    (called "Analytical Geometry"), this project required enhanced skills in coordinate transformations, 
    looping, function completion, and expression evaluation. The core objective was to complete a set of modular drawing and utility 
    functions to generate graphical plots of user-defined expressions in a Cartesian space - just like a graphing calculator.`,
    tags: [
      {
        name: "Python3",
        color: "blue-text-gradient",
      },
      {
        name: "Turtle",
        color: "green-text-gradient",
      },
      {
        name: "GIT",
        color: "pink-text-gradient",
      },
      {
        name: "Analytical Geometry",
        color: "orange-text-gradient",
      },
      {
        name: "Algebra",
        color: "blue-text-gradient",
      },
      {
        name: "Introduction to Computer Science",
        color: "green-text-gradient",
      },
    ],
    image: Graphing,
    source_code_link: "https://github.com/RyanLoi98/GraphingCalculator",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Analytical Geometry",
    description: `This is my CPSC 231 (Intro Into Computer Science - Fall 2021) assignment 1. This assignment involved 
    creating a graphical Python program using the turtle and math libraries to visualize analytical geometry concepts—specifically 
    the intersection of a line and a circle. The program runs in a graphical window (800x600 pixels), takes user input, draws 
    coordinate axes, a circle, and a line, and uses mathematical calculations to determine and display intersection points.`,
    tags: [
      {
        name: "Python3",
        color: "blue-text-gradient",
      },
      {
        name: "Turtle",
        color: "green-text-gradient",
      },
      {
        name: "GIT",
        color: "pink-text-gradient",
      },
      {
        name: "Analytical Geometry",
        color: "orange-text-gradient",
      },
      {
        name: "Algebra",
        color: "blue-text-gradient",
      },
      {
        name: "Introduction to Computer Science",
        color: "green-text-gradient",
      },
    ],
    image: Geo,
    source_code_link: "https://github.com/RyanLoi98/AnalyticalGeometry",
    live_site_link: "",
    youtube_link: "",
  },

  {
    name: "Shell Scripts",
    description: `This is my CPSC 457 (Operating Systems - Fall 2023) assignment on shell scripts. This assignment 
    introduced the fundamentals of shell scripting using Bash, a powerful command-line tool used in Unix-like operating systems. 
    The goal was to develop multiple utility scripts that demonstrate practical skills in command-line programming, file system 
    manipulation, and script-based automation. By completing these tasks, I explored core scripting concepts such as variable 
    handling, conditional logic, arithmetic evaluation, filesystem traversal, and use of built-in Linux utilities like find, chmod, and du.`,
    tags: [
      {
        name: "Shell Script",
        color: "blue-text-gradient",
      },
      {
        name: "Linux",
        color: "green-text-gradient",
      },
      {
        name: "Command Line",
        color: "pink-text-gradient",
      },
      {
        name: "UNIX Permissions",
        color: "orange-text-gradient",
      },
    ],
    image: Shell,
    source_code_link: "https://github.com/RyanLoi98/Shell-Script",
    live_site_link: "",
    youtube_link: "",
  },
];

export { education, awards, experiences, volunteering, technologies, projects };
