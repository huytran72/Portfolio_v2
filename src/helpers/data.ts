import nestImg from "assets/project/nestjs.png"
import nextjsImg from "assets/project/nextjs.jpeg"
import reactNativeImg from "assets/project/react-native.png"
import reactUltimateImg from "assets/project/react-ultimate.png"
import springMvcImg from "assets/project/spring-mvc.png"
import springRestImg from "assets/project/spring-rest.png"
import javaSqlImg from "assets/project/java-sql.png"
import reactViteSwc from "assets/project/react-vite-swc.png"

export const APP_DATA = {
  YOUTUBE_URL: "https://www.youtube.com/@hoidanit",
  TIKTOK_URL: "https://www.tiktok.com/@hoidanit",
  UDEMY_URL: "https://www.udemy.com/user/eric-7039/",
  FACEBOOK_URL: "https://www.facebook.com/tranducbaohuy/",
}

export const EXPERIENCES = [
  {
    id: 1,
    title: {
      vi: "Trưởng Nhóm Học Tập",
      en: "Peer Learning Team Leader ",
    },
    company: {
      vi: "Trường đại học San Jose State",
      en: "San Jose State University",
    },
    duration: {
      vi: "Tháng 1/2025 - Tháng 5/2025",
      en: "Jan 2025 - May 2025",
    },
  },
  {
    id: 2,
    title: {
      vi: "Gia sư",
      en: "Lead Tutor",
    },

    company: {
      vi: "Trường cao đẳng San Jose/ Evergreen",
      en: "San Jose/ Evergreen Community College",
    },
    duration: {
      vi: "Tháng 8/2022 - Tháng 5/2023",
      en: "Aug 2022 - May 2023",
    },
  },
  {
    id: 3,
    title: {
      vi: "Trợ lý nghiên cứu ",
      en: "Research Assistant ",
    },
    company: {
      vi: "Trường cao đẳng San Jose/ Evergreen",
      en: "San Jose/ Evergreen Community College",
    },
    duration: {
      vi: "Tháng 1/2022 - Tháng 5/2022",
      en: "Jan 2022 - May 2022",
    },
  },
  {
    id: 4,
    title: {
      vi: "Giáo viên Toán/ Khoa Học ",
      en: "Math/ Science Teacher ",
    },
    company: {
      vi: "Trường THCS/THPT Trần Cao Vân",
      en: "Tran Cao Van High School",
    },
    duration: {
      vi: "Tháng 8/2017 - Tháng 5/2019",
      en: "Aug 2017 - May 2019",
    },
  },
]

export const PROJECTS = [
  {
    id: 1,
    imgPath: reactUltimateImg,
    title:
      "Zing Music Clone | Next.js, React, TypeScript, API(Postman), MUI Design, MongoDB",
    description:
      "A full-stack music streaming web application inspired by Zing MP3, featuring secure user authentication, personalized playlists, and a responsive, modern UI. Engineered a full-stack music streaming platform with secure authentication and playlist management, scaling to 100+ concurrent users and a library of 50+ tracks during testing. Optimized API integration and client-side rendering, reducing playback latency and improving page load performance by ~30%, enhancing overall user experience.",
    githubLink: "https://github.com/huytran72/ZingMusic",
  },
  {
    id: 2,
    imgPath: reactUltimateImg,
    title: "Taskly Application",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    githubLink: "https://github.com/huytran72/Taskly-App",
    // demoLink: "",
  },
  {
    id: 3,
    imgPath: springRestImg,
    title: "Personal Website | React, TypeScript, Vite, SCSS",
    description:
      "Designed and implemented a fully responsive personal website using React, TypeScript, and SCSS with modular components and multi-language support (EN/VN); achieved 95+ Lighthouse performance score. Integrated resume download, 10+ project showcases, GitHub links, and interactive skill/ experience sections; deployed on Vercel for fast global access.",
    githubLink: "https://github.com/huytran72/Portfolio_v2",
    demoLink: "https://portfolio-ts-v2.vercel.app/",
  },
  {
    id: 4,
    imgPath: springMvcImg,
    title: "Sportify App | Java Spring MVC",
    description: [
      "Implemented a Sportify App that gathers data from the available list and developed an interface using Java",
      "The App supports researching the artist, song, published date, and good communicating with functional buttons like play, stop, next, previous",
    ],
    githubLink: "https://github.com/huytran72/Sportify_App",
    // demoLink:
    //   "https://hoidanit.vn/khoa-hoc/java-spring-mvc-ultimate-for-beginners-65ce0b770c05f4450fbd86ac.html",
  },
  {
    id: 5,
    imgPath: nextjsImg,
    title: "•	Egyptian Pyramids App | Java Spring Boot",
    description: [
      "Displayed information for a specific Egyptian pharaoh by asking the user for a pyramids ID number that the contributors associated with them.",
      "Reports a list of requested pyramids without any duplicates. Displays all information such as contributor’s name, gold, and total contribution for each pharaoh",
    ],
    githubLink: "https://github.com/huytran72/Egyptian_Pyramids_App",
    // demoLink:
    //   "",
  },
  {
    id: 6,
    imgPath: javaSqlImg,
    title:
      "Genetic_Information_Database_System | Java, MySQL, JDBC, Java Servlets",
    description:
      "Built a Genetic Information Database System using Java, JDBC, and MySQL, enabling secure storage, query, and management of genetic records. Developed a web interface with HTML & Java Servlets (Tomcat) to support user authentication, record modification, and SQL-based data retrieval.",
    githubLink:
      "https://github.com/huytran72/Genetic_Information_Database_System",
    // demoLink: "",
  },
  {
    id: 7,
    imgPath: reactViteSwc,
    title: "Tip Calculator App | JavaScript, React+Vite, HTML/CSS",
    description:
      "Built a responsive app using React, Vite, JavaScript (ES6+), and CSS, featuring modular components and real-time bill splitting. Configured Vite, ESLint, and Babel/SWC plugins for fast development workflow, optimized performance, and maintainable code quality.",
    githubLink: "https://github.com/huytran72/Tip_Calculator_App",
    // demoLink:
    //   "",
  },
]

export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Next JS",
  "Nest JS",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Git",
  "AWS",
  "Bootstrap",
  "Docker",
  "Go",
  "Figma",
  "Firebase",
  "MaterialUI",
  "Ant Design",
  "Nginx",
  "Strapi",
]

// Choose your skills from below. Make sure it's in the same format and spelled correctly.
// Couldn't find the required skills? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new

// AVAILABLE SKILLS

/* 
    HTML
    CSS
    JS 
    React
    Next JS
    Nuxt JS
    Node JS
    Vue
    Angular
    Docker
    Photoshop
    Illustrator
    Svelte
    GCP
    Azure
    Fastify
    Haxe
    Ionic
    Markdown
    Microsoft Office
    Picsart
    Sketch
    Unity
    WolframAlpha
    Adobe XD
    After Effects
    Bootstrap
    Bulma
    CapacitorJs
    Coffeescript
    MemSQL
    C
    C++
    C#
    Python
    Java
    Julia
    Matlab
    Swift
    Ruby
    Kotlin
    Go
    PHP
    Flutter
    Dart
    Typescript
    Swift
    Git
    Figma
    Canva
    Ubuntu
    Bootstrap
    MongoDB
    Tailwind
    ViteJS
    VuetifyJS
    MySQL
    PostgreSQL
    AWS
    Firebase
    Blender
    Premiere Pro
    Adobe Audition
    Deno
    Django
    Gimp
    Graphql
    Lightroom
    MaterialUI
    Nginx
    Numpy
    OpenCV
    Pytorch
    Selenium
    Strapi
    Tensorflow
    Webex
    Wordpress
  */
