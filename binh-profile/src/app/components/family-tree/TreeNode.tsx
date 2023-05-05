import { BOX_RATIO, BOX_SIZE } from "@/lib/constants";
import { Person } from "@/lib/models/family-tree";

import cardBg from "../../images/the-bai.png";

type Props = {
  people: Person[];
};

const TreeNode = ({ people }: Props) => {
  function getBorder(people: Person[], index: number) {
    if (people.length > 1) {
    //   if (index === 0) return "border-r border-red-500 border-box";
    //   if (index === 1) return "border-l border-red-500 border-box";
    }

    return "";
  }
  return (
    <div
      className="p-3"
      style={{
        width: `${BOX_SIZE}px`,
        height: `${BOX_SIZE}px`,
      }}
    >
      <div
        className="flex border-2 border-amber-500 box-content"
        style={{
          width: `${BOX_SIZE * BOX_RATIO}px`,
          height: `${BOX_SIZE * BOX_RATIO}px`,
        }}
      >
        {people.map((person, index) => {
          return (
            <div
              key={person.id}
              className={`flex flex-col items-center justify-center ${getBorder(
                people,
                index
              )}`}
              style={{
                backgroundImage: `url(${cardBg.src})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                
              }}
            >
              <div
                className={`text-xs text-center px-1 ${
                  person.gender === "F" && "text-purple-900"
                }`}
                style={{
                  width: `${(BOX_SIZE * BOX_RATIO) / people.length}px`,
                }}
              >
                <div>{person.gender === "M" ? "Ông" : "Bà"}</div>
                <div>{person.name}</div>
                <div>{person.birthday_year}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TreeNode;
