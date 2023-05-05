import { JobExperience } from "@/lib/models/profile";
import ListItem, {
  EducationListItem,
  JobExperienceListItem,
} from "../common/ListItem";

import ibm from "../../images/ibm.svg";
import habibi from "../../images/8mart.jpeg";
import sunity from "../../images/sunity.png";
import utagoe from "../../images/utagoe.png";

type Props = {
  experiences: JobExperience[];
};

const MyJobExperience = ({ experiences }: Props) => {
  function getIcon(id: string) {
    switch (id) {
      case "habibi":
        return <img src={habibi.src} alt="waseda" style={{ minWidth: 48 }} />;
      case "ibm":
        return <img src={ibm.src} alt="hust" style={{ minWidth: 48 }} />;
      case "sunity":
        return <img src={sunity.src} alt="lhp" style={{ minWidth: 48 }} />;
      case "utagoe":
        return <img src={utagoe.src} alt="lhp" style={{ minWidth: 48 }} />;
      default:
        return null;
    }
  }
  return (
    <div>
      {experiences.map((exp, index) => (
        <ListItem
          key={index}
          item={{
            icon: getIcon(String(exp.id)),
            title: exp.company,
            subTitle: <JobExperienceListItem experience={exp} />,
          }}
          onPress={() => {}}
        />
      ))}
    </div>
  );
};

export default MyJobExperience;
