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
  skills: string[];
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

export type Skill = {
  name: string;
};

export type Project = {
  name: string;
  desc: string;
  skills: string[];
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
