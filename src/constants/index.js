import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpeg";

export const HERO_CONTENT = `Welcome to my personal website! I am an undergraduate student at the University of Westminster, where I am pursuing my academic and career aspirations. Here, you'll find insights into my journey, projects, and experiences as I navigate through university life and beyond. Stay tuned for updates on my latest endeavors and feel free to connect with me!`;

export const ABOUT_TEXT ='Hello! I am an undergraduate student at the University of Westminster, currently pursuing a degree in Software Engineering. My academic journey has been a blend of theoretical knowledge and practical experience, allowing me to develop a strong foundation in various programming languages and technologies. During my time at university, I have completed numerous projects that align with my career aspirations. These projects have enabled me to gain hands-on experience and enhance my skills in several key areas CSS, JavaScript, Flutter, React .I am passionate about leveraging technology to solve real-world problems and am constantly seeking opportunities to learn and grow in the field of software engineering. Feel free to explore my projects and connect with me to discuss potential collaborations or career opportunities!';

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Travelling Website",
    image: project1,
    description:
      "Successfully created a website where users can get knowledge about Sri Lanka. The Website includes features like a quiz, buying products, a sitemap, an image gallery with descriptions, etc.",
    technologies: ["HTML", "CSS", "Java-Script"],
  },
  {
    title: "Food Recommendation Application",
    image: project2,
    description:
      "Customized Recipe Generation and tracker Mobile Application,Personalized recipe app that suggests dishes based on user preference, while also keeping track of ingredients in the user pantry",
    technologies: ["Flutter", "NodeJs", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Theatre Program",
    image: project4,
    description:
      "Successfully created a program using OOP concepts so that user can book a seat in the theater,print the seating area, book multiple seats, save information to a file, etc.",
    technologies: ["Java"],
  },
];


