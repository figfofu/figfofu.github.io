import { Contact } from "@/lib/models/profile";
import ListItem from "../common/ListItem";

// import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";

type Props = {
  contacts: Contact[];
};

const MyContact = ({ contacts }: Props) => {
  function getIcon(id: string) {
    switch (id) {
      case "email":
        return <SocialIcon network="google" />;
      case "linkedin":
        return <SocialIcon network="linkedin" />;
      case "facebook":
        return <SocialIcon network="facebook" />;
      case "twitter":
        return <SocialIcon network="twitter" />;
      default:
        return <SocialIcon />;
    }
  }
  return (
    <div>
      <div>
        {contacts.map((contact, index) => (
          <ListItem
            key={index}
            item={{
              icon: getIcon(contact.type),
              title: contact.name,
              subTitle: contact.url,
            }}
            onPress={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default MyContact;
