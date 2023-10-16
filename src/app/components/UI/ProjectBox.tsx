import {ProjectModel} from "@/app/components/page/Project";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShare} from "@fortawesome/free-solid-svg-icons";

export default function ProjectBox({project}: { project: ProjectModel }) {
    return (
        <div
            className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <a href={project.github_link}>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {project.title}
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                {project.description}
            </p>
            <a href={project.github_link}
               className="inline-flex items-center text-black-600 hover:underline">
                Source Code
                <FontAwesomeIcon icon={faShare} className={'w-3 ms-4'}/>
            </a>
        </div>);
}