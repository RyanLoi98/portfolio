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
      name: "Tailwind CSS",
      icon: tailwind,
      link: "https://tailwindcss.com/",
    },
    {
      name: "Three.js",
      icon: threejs,
      link: "https://threejs.org/",
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
];

export { education, awards, experiences, volunteering, technologies, projects };
