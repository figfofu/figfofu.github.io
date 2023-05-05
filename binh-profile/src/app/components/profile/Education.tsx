import { Education } from "@/lib/models/profile";
import ListItem, { EducationListItem } from "../common/ListItem";
import { SocialIcon } from "react-social-icons";

import waseda from "../../images/waseda.jpg";
import hust from "../../images/bk.jpg";
import lhp from "../../images/lhp.jpg";

type Props = {
  educations: Education[];
};

const MyEducation = ({ educations }: Props) => {
  function getIcon(id: string) {
    switch (id) {
      case "waseda":
        return <img src={waseda.src} alt="waseda" />;
      case "hust":
        return <img src={hust.src} alt="hust" />;
      case "lhp":
        return <img src={lhp.src} alt="lhp" />;
      default:
        return <img src={waseda.src} alt="waseda" />;
    }
  }
  return (
    <div>
      {educations.map((education, index) => (
        <ListItem
          key={index}
          item={{
            icon: getIcon(String(education.id)),
            title: education.school,
            subTitle: <EducationListItem education={education} />,
          }}
          onPress={() => {}}
        />
      ))}
    </div>
  );
};

export default MyEducation;
