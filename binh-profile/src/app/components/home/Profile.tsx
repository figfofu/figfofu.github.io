import { Profile } from "@/lib/models/profile";
import MainInfo from "../profile/MainInfo";

type Props = {
  profile: Profile;
};

const MyProfile = ({ profile }: Props) => {
  return (
    <div>
      <MainInfo profile={profile} />
    </div>
  );
};

export default MyProfile;
