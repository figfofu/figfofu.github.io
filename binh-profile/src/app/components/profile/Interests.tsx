import { Interest } from "@/lib/models/profile";

import igo from "../../images/igo.png";
import badminton from "../../images/badminton.jpg";
import football from "../../images/football.jpg";
import reading from "../../images/reading.jpg";
import travel from "../../images/travel.jpg";

type Props = {
  interests: Interest[];
};

const Interests = ({ interests }: Props) => {
  function getSrc(id: string) {
    switch (id) {
      case "igo":
        return igo.src;
      case "badminton":
        return badminton.src;
      case "football":
        return football.src;
      case "reading":
        return reading.src;
      case "travel":
        return travel.src;
      default:
        return igo.src;
    }
  }
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {interests.map((interest, index) => (
          <div className="border rounded-lg">
            <img
              className="h-auto max-w-full rounded-lg"
              src={getSrc(interest.id)}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
