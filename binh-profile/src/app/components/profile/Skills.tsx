import { Profile } from "@/lib/models/profile";
import ListItem, { LanguageListItem } from "../common/ListItem";
import { Badge } from "flowbite-react";

type Props = {
  profile: Profile;
};

const Skills = ({ profile }: Props) => {
  function getBadgeColor(id: string) {
    switch (id) {
      case "habibi":
        return "red";
      case "ibm":
        return "blue";
      case "utagoe":
        return "yellow";
      case "sunity":
        return "green";
      default:
        return "red";
    }
  }
  return (
    <div>
      <div className="flex flex-wrap">
        {profile.jobExperiences.map((job, index) =>
          job.skills.map((skill, index) => (
            <Badge color={getBadgeColor(String(job.id))} className="m-2">
              {skill}
            </Badge>
          ))
        )}
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-wrap">
        {profile.jobExperiences.map((job, index) => (
          <Badge color={getBadgeColor(String(job.id))} className="m-2">
            {job.company}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Skills;
