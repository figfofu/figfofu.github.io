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
      url: "",
    },
    {
      type: "linkedin",
      name: "LinkedIn",
      url: "",
    },
  ],
  jobExperiences: [
    {
      id: "habibi",
      company: "Habibi, Inc",
      address: "",
      companyDesc:
        "A Proxy Shopping Service of Japanese Products, 8mart Japan (8mart.jp)",
      position: "Chief Technology Officer",
      from: "Jan 2022",
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
  skills: ["Java"],
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
  projects: [],
  socials: [],
  awards: [],
  hobbies: [],
  references: [],
};

export function fullName(profile: Profile): string {
  return `${profile.lastName} ${profile.middleName} ${profile.firstName}`;
}
