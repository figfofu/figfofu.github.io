import { Education, JobExperience, Language } from "@/lib/models/profile";
import { ReactNode } from "react";

type Props = {
  item: ListItemProps;
  onPress: () => void;
};

type EducationListProps = {
  education: Education;
};

type JobExperienceListProps = {
  experience: JobExperience;
};

type LanguageListProps = {
  lang: Language;
};

type ListItemProps = {
  icon: ReactNode;
  title: ReactNode;
  subTitle: ReactNode;
};

type GeneralListItemProps = {
  name: string;
  desc: string;
};

const ListItem = ({ item, onPress }: Props) => {
  return (
    <div
      className="flex flex-row items-center justify-start p-4 bg-white rounded-lg shadow-xs cursor-pointer hover:bg-gray-100"
      onClick={onPress}
    >
      {item.icon && (
        <div className="flex flex-row items-center w-16 h-16 pr-4">
          <div className="text-gray-600">{item.icon}</div>
        </div>
      )}
      <div className="flex flex-col">
        <div className="text-lg font-medium text-black">{item.title}</div>
        <div className="text-gray-600">{item.subTitle}</div>
      </div>
    </div>
  );
};

export const EducationListItem = ({ education }: EducationListProps) => {
  return (
    <div>
      <div>{education.degree}</div>
      <div>
        {education.from}-{education.to}
      </div>
    </div>
  );
};

export const JobExperienceListItem = ({
  experience,
}: JobExperienceListProps) => {
  return (
    <div>
      <div className="text-sm">{experience.position}</div>
      <div>{experience.companyDesc}</div>
      <div>{experience.address}</div>
      <div>
        {experience.from}-{experience.to}
      </div>
    </div>
  );
};

export const LanguageListItem = ({ lang }: LanguageListProps) => {
  return (
    <div>
      <div>{lang.name}</div>
      <div>{lang.level}</div>
    </div>
  );
};

export const GeneralListItem = ({ name, desc }: GeneralListItemProps) => {
  return (
    <div>
      <div>{name}</div>
      <div>{desc}</div>
    </div>
  );
};

export default ListItem;
