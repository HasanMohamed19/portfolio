/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hasan Mohamed",
  title: "Hi all, I'm Hasan Mohamed",
  subTitle: emoji(
    "A passionate Backend & AI Engineer 🚀 having an experience of building backends with Java Spring boot and AI/ML projects with python and it's framework and libraries."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HasanMohamed19",
  linkedin: "https://www.linkedin.com/in/hasan-mohamed-982106246/",
  gmail: "thehasanm03@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Backend Engineer who is highly interested in AI Engineer",
  skills: [
    emoji("⚡ Develop highly performanct & secure Backend systems"),
    emoji("⚡ Implement AI/ML solutions"),
    emoji("⚡ Integration of third party services such as Firebase & AWS")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }
    // todo: add support for svg for spring boot c# etc
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bahrain Polytechnic",
      logo: require("./assets/images/polytechnicLogo.png"),
      subHeader: "Bachelor of ICT in programming",
      duration: "September 2021 - June 2025",
      // desc: "Won best grad project award for best use of technology",
      descBullets: [
        "Won best grad project award for best use of technology",
        "Graduated with 3.92 GPA"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AI",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Array Innovation",
      companylogo: require("./assets/images/array_logo.png"),
      date: "Feb 2025 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Started as a Java Spring-boot backed developer intern for Array World, utilizing AWS for cloud and REDIS for caching. Then promoted to full-time in May.",
        "Won best award for best use of emerging technologies for CLP Project.",
        "Currently working for a client as Backend engineer using Java & Spring Boot on a microservice based applications."
      ]
    },
    {
      role: "AWS CIC Intern",
      company: "AWS",
      companylogo: require("./assets/images/aws_logo.jpg"),
      date: "Sep 2024 – Jan 2025",
      // desc: "Worked with AWS and Education & Training Quality Authority (BQA) in collaboration with AWS-CIC Program and Bahrain Polytechnic to develop InsightAI, GenAI solution for Bahrain's Educational Institutes. It is a platform that provides the users access to statistics about the educational sector in Bahrain, in addition to a chatbot that allows the user to get insights about uploaded BQA reports.",
      descBullets: [
        "Built my Senior project with AWS CIC and Education & Training Quality Authority (BQA) using AWS Services.",
        "Was responsible for Bedrock, LLMs, AI, RAG, Prompt Engineering, agents and text extraction part of the project.",
        "It is a system for analyzing BQA reports managing them with the ability to ask a chatbot about them."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Unipal",
      companylogo: require("./assets/images/unipal_bh_logo.jpg"),
      date: "Aug 2024 – Nov 2024",
      desc: "Building Recommendation system for Unipal’s mobile app using techniques such as Collaborative filtering etc., to add more personalization and host it on AWS with lambda and docker."
    },
    {
      role: "Android developer",
      company: "VIITech",
      companylogo: require("./assets/images/viitech_logo.jpg"),
      date: "Jul 2022 – Jan 2023",
      // desc: "Building Recommendation system for Unipal’s mobile app using techniques such as Collaborative filtering etc., to add more personalization and host it on AWS with lambda and docker."
      descBullets: [
        "Started as an intern for two months (July & August 2022) then got promoted to part-time in September 2022. Worked on various apps.",
        "Managed to implement new features and improve existing ones on the apps using both Java and Kotlin, and migrated code from Java to Kotlin."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Backbase backend certified - 2025",
      // subtitle:
      // "Backbase ",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Backbace certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/in/hasan-mohamed-982106246/overlay/1755103124453/single-media-viewer/?profileId=ACoAADziWfIByl2nS2n1IC8mgu8FGiV7B2Zq6Cs"
        }
      ]
    },
    {
      title: "AWS Certified AI Practitioner",
      // subtitle:
      // "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/aws_logo.jpg"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Credly",
          url: "https://www.credly.com/badges/21923259-dfc2-4944-8e96-afe40f0d3e2c/linked_in_profile"
        }
      ]
    },
    {
      title: "AWS Certified Developer – Associate",
      // subtitle:
      // "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/aws_logo.jpg"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Credly",
          url: "https://www.credly.com/badges/742ad7a8-1325-44fd-88f6-545c01c63280/linked_in_profile"
        }
      ]
    },
    {
      title:
        "CMI Level 3 Certificate in Principles of Management and Leadership",
      subtitle:
        "Gained this certification as part of the CPISP shcolarship program",
      image: require("./assets/images/backbaseLogo.png"),
      imageAlt: "CMI Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "thehasanm03@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
