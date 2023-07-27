import { Profile } from "@/lib/models/profile";
import ListItem, {
  GeneralListItem,
  LanguageListItem,
} from "../common/ListItem";
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
      <div className="flex flex-wrap flex-col">
        {profile.skills.map((skill, index) => {
          return (
            <div key={index}>
              <ListItem
                key={index}
                item={{
                  icon: null,
                  title: skill.category,
                  subTitle: (
                    <GeneralListItem
                      name={skill.title}
                      desc={skill.details.map((sk, index) => {
                        return (
                          <div key={index} className="flex flex-wrap">
                            {sk}
                          </div>
                        );
                      })}
                    />
                  ),
                }}
                onPress={() => {}}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap">
        {profile.jobExperiences.map((job, ind) =>
          job.skills.map((skill, index) => (
            <Badge
              color={getBadgeColor(String(job.id))}
              className="m-2"
              key={index}
            >
              {skill}
            </Badge>
          ))
        )}
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-wrap">
        {profile.jobExperiences.map((job, index) => (
          <Badge
            color={getBadgeColor(String(job.id))}
            className="m-2"
            key={index}
          >
            {job.company}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Skills;
