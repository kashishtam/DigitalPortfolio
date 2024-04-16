/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kashish's Portfolio",
  description:
    "A passionate individual who is excited to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Kashish Tamrakar Portfolio",
    type: "website",
    url: "http://kashishtam.com/",
  },
};

//Home Page
const greeting = {
  title: "Kashish Tamrakar",
  logo_name: "Kashish Tamrakar",
  nickname: "",
  subTitle:
    "A passionate individual who is excited to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1I_v184R7R9OoC1F8K8QMOZOag1TZFFFo/view?usp=drive_link",
  portfolio_repository: "https://github.com/kashishtam/DigitalPortfolio",
  githubProfile: "https://github.com/kashishtam",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/kashishtam",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kashishtam/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:kashishtam@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/kashishtam_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Software development",
      fileName: "SoftwareDevImg",
      skills: [
        "⚡ Developing applications that handles streamlines processing records",
        "⚡ Experience of working with .NET frameworks and C#",
        "⚡ Experience with automation tools using Selenium",
      ],
      softwareSkills: [
        {
          skillName: "C#",
          fontAwesomeClassname: "logos:c-sharp",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Selenium",
          fontAwesomeClassname: "skill-icons:selenium",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "skill-icons:dotnet",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Visual Studio",
          fontAwesomeClassname: "devicon:visualstudio",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building website front end using HTML, CSS, and JS",
        "⚡ Creating application backend in Node and Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "API",
          fontAwesomeClassname: "gravity-ui:abbr-api",
        },
      ],
    },
    {
      title: "Unity 2D game development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working in Unity to build 2D games",
        "⚡ Experience in engineering player movements and movement physics ",
        "⚡ Optimizing game performance and responsiveness",
      ],
      softwareSkills: [
        {
          skillName: "Unity",
          fontAwesomeClassname: "mdi:unity",
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "logos:c-sharp",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/kashishtam/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Colorado Boulder",
      subtitle: "BS in Computer Science",
      logo_path: "cu_boulder.png",
      alt_name: "CU Boulder",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have taken software engineering classes like DS, Algorithms, DBMS, OS, Computer systems, AI, OOAD, etc.",
      ],
      website_link: "https://www.colorado.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I have worked as an Application Developer at CU Boulder for about 2 years during my undergraduate career and now I am actively seeking new roles in software development field.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Application Developer",
          company: "Office of Registrar TCR",
          company_url: "",
          logo_path: "cu_boulder.png",
          duration: "August 2022 - Present",
          location: "Boulder, CO, USA",
          description:
            "Developed and maintained .NET C# applications to automate tasks using Selenium to handle student records in CU's internal database. Communicated to applications' owners to fix and improve said functionalites.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is with my capstone team where we build a ML Engagement model and viusalize the said data on google maps.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title:"",
};
const publications = {
  data: [
  
  ],
};
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "portrait.png",
    description:
      "I am available through email, phone, or direct messages from my social media below. I will make sure to get back to you as soon as possible.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle: "Erie, CO, USA",
    locality: "Erie",
    country: "USA",
    region: "Colorado",
    postalCode: "80516",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "303-505-5080",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
