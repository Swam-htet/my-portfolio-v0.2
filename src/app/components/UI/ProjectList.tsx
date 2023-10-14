import {ProjectModel} from "@/app/components/page/Project";
import ProjectBox from "@/app/components/UI/ProjectBox";

export default function ProjectList() {
    let list: ProjectModel[] = [
        {
            title: "Project One",
            github_link: "Link"
        },
        {
            title: "Project One",
            github_link: "Link"
        },
        {
            title: "Project One",
            github_link: "Link"
        },
        {
            title: "Project One",
            github_link: "Link"
        }
    ];
    return <div className={'my-20'}>
        <h1 className={'text-2xl mb-5'}>Projects - </h1>
        <div className={'grid grid-cols-1 xl:grid-cols-2 gap-5'}>
            {list.map((project, index) => <ProjectBox key={index} project={project}/>)}
        </div>
    </div>
}