export type Profile = {
  firstName: string;
  lastName: string;
  middleName: string;
  jobTitle: string;
  email: string;
  contacts: Contact[];
  slogan: string;
  about: string;
  jobExperiences: JobExperience[];
  educations: Education[];
  skills: SkillSummary[];
  projects: Project[];
  socials: Social[];
  languages: Language[];
  interests: Interest[];
  awards: Award[];
  hobbies: Hobby[];
  references: Reference[];
  certificates: Certification[];
  publications: Publication[];
};

export type Contact = {
  type: string;
  name: string;
  url: string;
};
export type JobExperience = {
  id?: string;
  company: string;
  address: string;
  companyDesc: string;
  position: string;
  from: string;
  to: string;
  skills: string[];
};

export type Education = {
  id?: string;
  school: string;
  address?: string;
  degree: string;
  major?: string;
  from: string;
  to: string;
};

export type SkillCategory = string;
export const SKILL_CATEGORIES: SkillCategory[] = [
  "Programming Languages",
  "Frameworks",
  "Databases",
  "Cloud Computing",
  "Tools",
  "Others",
  "Operating System",
  "AI & Machine Learning",
  "Cloud Computing",
];
export type SkillSummary = {
  title: string;
  details: string[];
  category: SkillCategory;
};

export type Project = {
  id: string;
  from: string;
  to: string;
  name: string;
  desc: string;
  details: string[];
  skills: string[];
  job_desc: string;
};

export type Social = {
  name: string;
  url: string;
};

export type Language = {
  id: string;
  name: string;
  level: string;
};

export type Interest = {
  id: string;
  name: string;
};

export type Award = {
  name: string;
  desc: string;
};

export type Hobby = {
  name: string;
};

export type Reference = {
  name: string;
  desc: string;
};

export type Certification = {
  id: string;
  name: string;
  desc: string;
};

export type Publication = {
  title: string;
  date: string;
  conference: string;
};
