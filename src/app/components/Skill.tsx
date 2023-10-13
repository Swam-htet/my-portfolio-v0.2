import {
  faJs,
  faLaravel,
  faNode,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

let list = [
  {
    name: "JavaScript",
    type: faJs,
  },
  {
    name: "PHP",
    type: faPhp,
  },
  {
    name: "Node.js",
    type: faNode,
  },
  {
    name: "React.js",
    type: faReact,
  },
  {
    name: "Laravel",
    type: faLaravel,
  },
  {
    name: "MySQL",
    type: faDatabase,
  },
  {
    name: "MongoDB",
    type: faDatabase,
  },
  {
    name: "Laravel",
    type: faLaravel,
  },
  {
    name: "Laravel",
    type: faLaravel,
  },
  {
    name: "Laravel",
    type: faLaravel,
  },
  {
    name: "Laravel",
    type: faLaravel,
  },
];

export default function Skill() {
  return (
    <>
      <h2 className={"text-2xl mb-5"}>My Skills </h2>

      <div className={"grid grid-cols-5 gap-10"}>
        {list.map((item, index) => (
          <div
            key={index}
            className={
              "col-span-1 rounded p-5 ring-2 ring-transparent hover:blur-sm"
            }>
            <h1 className={"mb-2"}>{item.name}</h1>
            <FontAwesomeIcon icon={item.type} className={"w-10"} />
          </div>
        ))}
      </div>
    </>
  );
}
