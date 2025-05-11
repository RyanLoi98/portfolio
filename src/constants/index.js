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
    live_site_link: "https://cpsc-581-individual-project.glitch.me",
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
    live_site_link: "https://creative-phone-unlock.glitch.me/",
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
    live_site_link: "https://a-tale-of-2-buttons.glitch.me",
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
        name: "Dining Philosophers",
        color: "green-text-gradient",
      },
       {
        name: "IPC",
        color: "pink-text-gradient",
      },
      {
        name: "Multi-threading",
        color: "orange-text-gradient",
      },
      {
        name: "Synchronization",
        color: "blue-text-gradient",
      },
      {
        name: "Critical Section",
        color: "green-text-gradient",
      },
      {
        name: "Zombie Processes",
        color: "pink-text-gradient",
      },
      {
        name: "POSIX Threads",
        color: "orange-text-gradient",
      },
      {
        name: "Concurrency",
        color: "blue-text-gradient",
      },
      {
        name: "Race Condition",
        color: "green-text-gradient",
      },
      {
        name: "Semaphores",
        color: "pink-text-gradient",
      },
      {
        name: "Mutual Exclusion",
        color: "orange-text-gradient",
      },
      {
        name: "Deadlock",
        color: "blue-text-gradient",
      },
      {
        name: "Principles of Operating Systems",
        color: "green-text-gradient",
      },
    ],
    image: DiningPhilosopherandIPC,
    source_code_link: "https://github.com/RyanLoi98/Dining-Philosopher-and-IPC-Simulation",
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
];

export { education, awards, experiences, volunteering, technologies, projects };
