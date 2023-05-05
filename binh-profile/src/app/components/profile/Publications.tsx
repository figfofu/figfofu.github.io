import { Publication } from "@/lib/models/profile";
import ListItem, {
  GeneralListItem,
  LanguageListItem,
} from "../common/ListItem";

type Props = {
  publications: Publication[];
};

const Publications = ({ publications }: Props) => {
  return (
    <div>
      {publications.map((pub, index) => (
        <ListItem
          key={index}
          item={{
            icon: null,
            title: pub.title,
            subTitle: <GeneralListItem name={pub.conference} desc={pub.date} />,
          }}
          onPress={() => {}}
        />
      ))}
    </div>
  );
};

export default Publications;
