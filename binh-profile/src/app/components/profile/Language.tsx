import { Language } from "@/lib/models/profile";
import ListItem, { LanguageListItem } from "../common/ListItem";
import US from "country-flag-icons/react/3x2/US";
import VN from "country-flag-icons/react/3x2/VN";
import JP from "country-flag-icons/react/3x2/JP";

type Props = {
  langs: Language[];
};

const MyLanguage = ({ langs }: Props) => {
  function getIcon(id: string) {
    switch (id) {
      case "en":
        return <US className="w-12 h-auto border border-black" />;
      case "jp":
        return <JP className="w-12 h-auto border border-black" />;
      case "vi":
        return <VN className="w-12 h-auto border border-black" />;
      default:
        return <US className="w-12 h-auto border border-black" />;
    }
  }
  return (
    <div>
      {langs.map((lang, index) => (
        <ListItem
          key={index}
          item={{
            icon: getIcon(String(lang.id)),
            title: lang.name,
            subTitle: <LanguageListItem lang={lang} />,
          }}
          onPress={() => {}}
        />
      ))}
    </div>
  );
};

export default MyLanguage;
