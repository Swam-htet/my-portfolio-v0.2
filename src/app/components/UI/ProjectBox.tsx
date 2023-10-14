import Link from "next/link";
import {ProjectModel} from "@/app/components/page/Project";

export default function ProjectBox({project}: { project: ProjectModel }) {
    return (<div className={'p-10 bg-gray-100 mb-5 rounded-xl'}>
        <h1>{project.title}</h1>
        <div>
            <Link href={project.github_link} className={'hover:underline'}>GitHub Link</Link>
        </div>
        <div>
            {
                project.deployment_link ?
                    <Link href={project.deployment_link} className={'hover:underline'}>Deployment Link</Link>
                    : null
            }
        </div>

    </div>)
}