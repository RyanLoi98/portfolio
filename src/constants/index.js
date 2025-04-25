// This index.js file contains the constants (things like text descriptions, pictures etc) that will be used throughout the application, this makes changes easier
// as it will be done all in one spot.

import {
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
    carrent,
    jobit,
    tripguide,
    threejs,
    uofclogo,
    AlbertaGovLogo,
    educationmatterslogo,
    AdvanceHairSalonLogo,
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
      coursework:
        [
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
      coursework: [ ],
      titleSize: "text-[19px]",
      link: "https://calendar.ucalgary.ca/programs/CMBIBSC",
    },

  ]

  const awards = [
    {
      title: "Alberta New Beginnings Bursary",
      icon: AlbertaGovLogo,
      date: "2022",
      points: [
      ],
      link: "https://studentaid.alberta.ca/scholarships/new-beginnings-bursary/",
    },

    {
      title: "Jason Lang scholarship",
      icon: AlbertaGovLogo,
      date: "2017, 2019",
      points: [
      ],
      link: "https://studentaid.alberta.ca/scholarships/jason-lang-scholarship/",
    },

    {
      title: "Alexander Rutherford Scholarship",
      icon: AlbertaGovLogo,
      date: "2016",
      points: [
      ],
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
      title: "Customer Experience & Administrative Lead",
      company_name: "Advance Hair Salon (Calgary, Canada)",
      icon: AdvanceHairSalonLogo,
      iconBg: "#525c82",
      date: "July 2013 - May 2024",
      duration: "10 years, 10 months",
      points: [
        "Provided exceptional front-desk service by answering client inquiries, managing high-volume appointment scheduling, and ensuring a welcoming atmosphere for all guests.",
        "Maintained a spotless salon environment by overseeing cleanliness standards, laundering towels, and organizing workstations to meet health and safety protocols.",
        "Managed supply chain logistics, including ordering salon products, restocking inventory, and negotiating with vendors to reduce costs.",
        "Oversaw daily financial operations, including cash handling, sales reconciliation, and basic bookkeeping to support accurate financial reporting.",
        "Assisted in onboarding and training new team members, delivering guidance on company procedures, customer service standards, and point-of-sale systems.",
        "Spearheaded weekly staff meetings to align team objectives, set performance goals, and foster a positive, collaborative work culture.",  
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { education, awards, technologies, experiences, testimonials, projects };