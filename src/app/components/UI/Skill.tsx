import {faJs, faLaravel, faNode, faPhp, faReact,} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";

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

];

export default function Skill() {
    return (
        <div className={'my-20'}>
            <h2 className={"text-2xl mb-5"}>Language -  </h2>

            <div className={"grid grid-cols-4 md:grid-cols-6"}>
                {list.map((item, index) => (
                    <div
                        key={index}
                        className={
                            "p-5"
                        }>
                        <h1 className={"mb-2"}>{item.name}</h1>
                        <span className={''}>
                            <FontAwesomeIcon icon={item.type} className={"w-10"}/>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
