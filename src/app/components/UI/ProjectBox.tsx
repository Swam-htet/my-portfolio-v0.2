import Link from "next/link";
import {ProjectModel} from "@/app/components/page/Project";

export default function ProjectBox({project}: { project: ProjectModel }) {
    return (<div className={'p-10 bg-black dark:bg-white mb-5 rounded-xl'}>
        <h1 className={'text-white dark:text-black'}>{project.title}</h1>
        <div>
            <Link href={project.github_link} className={'hover:underline text-white dark:text-black'}>GitHub Link</Link>
        </div>
        <div>
            {
                project.deployment_link ?
                    <Link href={project.deployment_link} className={'hover:underline text-white dark:text-black'}>Deployment Link</Link>
                    : null
            }
        </div>

    </div>)
}