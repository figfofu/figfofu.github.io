import { Project } from "@/lib/models/profile";
import ListItem, { GeneralListItem } from "../common/ListItem";

type Props = {
  projects: Project[];
};
type CardProps = {
  item: Project;
};

type CardGridProps = {
  item: Project;
};
const Projects = (p: Props) => {
  return (
    <div>
      <CardGrid {...p} />
      {/* {projects.map((pro, index) => (
        <ListItem
          key={index}
          item={{
            icon: null,
            title: pro.name,
            subTitle: <GeneralListItem name={pro.name} desc={pro.desc} />,
          }}
          onPress={() => {}}
        />
      ))} */}
    </div>
  );
};

const CardGrid = ({ projects }: Props) => {
  return (
    <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
      {projects.map((item, index) => (
        <CardItem key={index} item={item} />
      ))}
    </div>
  );
};
const CardItem = ({ item }: CardProps) => {
  return (
    <figure className="flex flex-col items-center justify-start p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
      <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {item.name}
        </h3>
        <p className="my-4">{item.desc}</p>
      </blockquote>
      <figcaption className="flex items-end justify-center space-x-3 h-full w-full">
        {/* <img
          className="rounded-full w-9 h-9"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
          alt="profile picture"
        ></img> */}
        <div className="space-y-0.5 font-medium dark:text-white text-center">
          {item.details.map((detail, index) => {
            return <div key={index}>{detail}</div>;
          })}
        </div>
      </figcaption>
    </figure>
  );
};

export default Projects;
