import { Certification } from "@/lib/models/profile";
import ListItem, {
  GeneralListItem,
  LanguageListItem,
} from "../common/ListItem";
import US from "country-flag-icons/react/3x2/US";
import VN from "country-flag-icons/react/3x2/VN";
import JP from "country-flag-icons/react/3x2/JP";

type Props = {
  certs: Certification[];
};

const MyCertificate = ({ certs }: Props) => {
  function getIcon(id: string) {
    switch (id) {
      case "toeic":
        return <US className="w-12 h-auto border border-black" />;
      case "jlpt":
        return <JP className="w-12 h-auto border border-black" />;
      case "math":
        return <VN className="w-12 h-auto border border-black" />;
      default:
        return <US className="w-12 h-auto border border-black" />;
    }
  }
  return (
    <div>
      {certs.map((cert, index) => (
        <ListItem
          key={index}
          item={{
            icon: getIcon(String(cert.id)),
            title: cert.name,
            subTitle: <GeneralListItem {...cert} />,
          }}
          onPress={() => {}}
        />
      ))}
    </div>
  );
};

export default MyCertificate;
