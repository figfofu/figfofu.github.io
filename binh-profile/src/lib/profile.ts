import { Profile } from "./models/profile";

export const PROFILE: Profile = {
  firstName: "Binh",
  lastName: "Bui",
  middleName: "Duc",
  jobTitle: "Software Engineer",
  email: "panda.it.bk@gmail.com",
  slogan: "A engineer, a learner, a contributor",
  about:
    "Experienced Software Engineer with a demonstrated history of working in the information technology and services industry.\n Skilled in Japanese, Java, PHP, C, Javascript, HTML. Strong engineering professional with a Master's degree focused in Computer Science from Waseda University",
  contacts: [
    {
      type: "email",
      name: "Email",
      url: "panda.it.bk@gmail.com",
    },
    {
      type: "facebook",
      name: "Facebook",
      url: "https://www.facebook.com/bui.d.binh.9/",
    },
    {
      type: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/buiducbinh/",
    },
  ],
  jobExperiences: [
    {
      id: "settler",
      company: "Settler, Inc",
      address: "",
      companyDesc: "Trading Card Platform (app.torecaswap.com)",
      position: "Software Developer",
      from: "Sep 2023",
      to: "now",
      skills: [
        "Amazon Web Services (AWS)",
        "MySQL",
        "NextJS",
        "GitHub",
        "GitHub Action",
        "Panda (CSS Framework)",
        "JavaScript",
        "Docker",
      ],
    },
    {
      id: "habibi",
      company: "Habibi, Inc",
      address: "",
      companyDesc:
        "A Proxy Shopping Service of Japanese Products, 8mart Japan (8mart.jp)",
      position: "Chief Technology Officer",
      from: "Sep 2023",
      to: "now",
      skills: [
        "Amazon Web Services (AWS)",
        "PostgreSQL",
        "Vue.js",
        "GitHub",
        "CircleCI",
        "Bulma (CSS Framework)",
        "JavaScript",
        "React.js",
        "Flutter",
        "Ruby on Rails",
        "Docker",
      ],
    },
    {
      id: "ibm",
      company: "IBM Japan",
      address: "19-21 Nihonbashi Hakozaki-cho Chuo-ku. Tokyo 103-8510. Japan",
      companyDesc:
        "American multinational technology corporation / International Business Machines Corporation (IBM)",
      position: "Software Engineer",
      from: "Oct 2016",
      to: "Dec 2021",
      skills: [
        "Python (Programming Language)",
        "Operating Systems",
        "IBM Cloudant",
        "IBM Db2",
        "IBM Cloud",
        "Artificial Intelligence (AI)",
        "Machine Learning",
        "Microsoft Azure",
        "Apache CouchDB",
        "Jenkins",
        "Cucumber",
        "MySQL",
        "Node.js",
        "React.js",
      ],
    },
    {
      id: "utagoe",
      company: "Utagoe",
      address: "1-22-3 Nishiwaseda Shinjyuku-ku Tokyo, 169-0051 Japan",
      companyDesc: "Android App Development (Moment Diary)",
      position: "Android App Development",
      from: "Feb 2014",
      to: "Sep 2016",
      skills: ["Android", "Android Studio", "Java", "MySQL", "Git"],
    },
    {
      id: "sunity",
      company: "Sunity",
      address: "〒154-0012 東京都世田谷区駒沢2-12-3 大幸ビル",
      companyDesc: "Web service development",
      position: "Web Developer",
      from: "Feb 2013",
      to: "Aug 2014",
      skills: ["Adobe Photoshop", "Php", "Bash"],
    },
  ],
  educations: [
    {
      id: "waseda",
      school: "Waseda University",
      degree: "Master's degree, Computer Science",
      from: "2014",
      to: "2016",
    },
    {
      id: "waseda",
      school: "Waseda University",
      degree: "Bachelor's degree, Computer Science",
      from: "2010",
      to: "2014",
    },
    {
      id: "hust",
      school: "Hanoi University of Science and Technology",
      degree: "Computer Science",
      from: "2008",
      to: "2010",
    },
    {
      id: "lhp",
      school: "Le Hong Phong, Nam Dinh",
      degree: "High School, Mathematics",
      from: "2005",
      to: "2008",
    },
  ],
  certificates: [
    {
      id: "toeic",
      name: "TOEIC",
      desc: "880",
    },
    {
      id: "jlpt",
      name: "JLPT",
      desc: "N1",
    },
    {
      id: "math",
      name: "VMO(Vietnam Mathematical Olympiad)",
      desc: "4th Prize",
    },
  ],
  languages: [
    {
      id: "vi",
      name: "Vietnamese",
      level: "Native",
    },
    {
      id: "jp",
      name: "Japanese",
      level: "Business",
    },
    {
      id: "en",
      name: "English",
      level: "Intermediate",
    },
  ],
  skills: [
    {
      title: "Bash, C, Java, Javascript/Node JS, Python",
      details: [],
      category: "Programming Language",
    },
    {
      title: "Android, Linux",
      details: [
        "Understand and modify kernel, module",
        "Develop mobile applications (Native Android, Flutter)",
      ],
      category: "Operating System",
    },
    {
      title: "",
      details: [
        "Understand the basics of Machine Learning, Deep Learning, Explainable AI",
        "Use AI frameworks (Tensorflow, spark, ...) to build simple AI models",
      ],
      category: "AI & Machine Learning",
    },
    {
      title: "AWS, GCP, IBM Cloud",
      details: [
        "Understand the basics of docker, kubernetes, microservices…",
        "Build and deploy applications on cloud platforms (AWS, GCP, IBM Cloud)",
      ],
      category: "Cloud Computing",
    },
  ],
  interests: [
    {
      id: "football",
      name: "Soccer",
    },
    { id: "travel", name: "Traveling" },
    { id: "reading", name: "Reading" },
    { id: "badminton", name: "Badminton" },
    { id: "igo", name: "Igo (Weiqi, Baduk)" },
  ],
  projects: [
    {
      id: "oscar",
      name: "OSCAR Compiler",
      desc: "Automatic Parallelization and Power Consumption Optimization Compiler",
      details: [
        "Programming Language: C",
        "Role: Propose new ideas to optimize the power consumption algorithm, partially contribute to the implementation",
      ],
      from: "",
      to: "",
      skills: [],
      job_desc: "",
    },
    {
      id: "taylor",
      name: "TaylorMade",
      desc: "An eCommerce Website https://shop.taylormadegolf.jp",
      from: "",
      to: "",
      details: ["Programming Language: Java, PHP", "Role: Web Developer"],
      skills: [],
      job_desc: "",
    },
    {
      id: "moment",
      name: "Moment Diary",
      desc: "An Android Application",
      from: "",
      to: "",
      details: ["Programming Language: Java", "Role: Android Developer"],
      skills: [],
      job_desc: "",
    },
    {
      id: "wex",
      name: "IBM Watson Discovery",
      desc: "A natural language processing software to analyze, search, cluster, classify documents",
      from: "",
      to: "",
      details: ["Programming Language: Java", "Role: Quality Control (QA)"],
      skills: [],
      job_desc: "",
    },
    {
      id: "wks",
      name: "IBM Watson Knowledge Studio",
      desc: "A software helps to extract, annotate, build AI model for natural language processing",
      from: "",
      to: "",
      details: [
        "Programming Language: Java, Javascript",
        "Role: Quality Control (QA)",
      ],
      skills: [],
      job_desc: "",
    },
    {
      id: "wkc",
      name: "IBM Watson Knowledge Catalog",
      desc: "A platform to manage data, automatically build and deploy AI models",
      from: "",
      to: "",
      details: [
        "Programming Language: Java, Javascript",
        "Role: Backend developer",
      ],
      skills: [],
      job_desc: "",
    },
    {
      id: "wos",
      name: "IBM Watson Openscale",
      desc: "A service to manage, monitor fairness, quality, drift of AI models, help to build trust and transparent AI models with explainability",
      from: "",
      to: "",
      details: [
        "Programming Language: NodeJS, Javascript, React",
        "Role: Frontend developer",
      ],
      skills: [],
      job_desc: "",
    },
    {
      id: "habibi",
      name: "8mart Website",
      desc: "Japan Proxy Shopping Service",
      from: "",
      to: "",
      details: [
        "Programming Language: Ruby on Rails, Javascript, React, VueJS",
        "Role: CTO, Fullstack developer",
      ],
      skills: [],
      job_desc: "",
    },
    {
      id: "settler",
      name: "TorecaSwap",
      desc: "Trading Card Service",
      from: "",
      to: "",
      details: [
        "Programming Language: Javascript, NextJS, Docker, MySQL",
        "Role: Fullstack developer",
      ],
      skills: [],
      job_desc: "",
    },
  ],
  publications: [
    {
      title: "An Android Systrace Extension for Tracing Wakelocks",
      date: "Aug 25, 2016",
      conference:
        "2016 IEEE International Conference on Embedded and Ubiquitous Computing (EUC 2016)",
    },
    {
      title:
        "Android Video Processing System Combined with Automatically Parallelized and Power Optimized Code by OSCAR Compiler",
      date: "May 3, 2016",
      conference: "Journal of Information Processing (online)",
    },
    {
      title:
        "OSCAR 自動並 列化コンパイラ、Haswell マルチコア上での OpenCV 顔認識処理の自動低消費 電力化、モデルベース開発により生 成された血管検出プログラムの自動並列化",
      date: "Nov 1, 2015",
      conference: "Embedded Technology 2015",
    },
    {
      title:
        "Android Movie Player System Combined with Automatically Parallelized and Power Optimized Code by OSCAR Compiler",
      date: "Embedded System Symposium",
      conference: "Oct 1, 2014",
    },
    {
      title:
        "Android Demonstration System of Automatic Parallelization and Power Optimization by OSCAR Compiler",
      date: "SWoPP Nigata 2014",
      conference: "Jul 6, 2014",
    },
  ],
  socials: [],
  awards: [],
  hobbies: [],
  references: [],
};

export function fullName(profile: Profile): string {
  return `${profile.lastName} ${profile.middleName} ${profile.firstName}`;
}
