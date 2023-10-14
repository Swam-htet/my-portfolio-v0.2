import ProjectBox from "@/app/components/UI/ProjectBox";
import SocialList from "@/app/components/UI/SocialList";
import ProjectList from "@/app/components/UI/ProjectList";

export interface ProjectModel {
    title: string,
    github_link: string,
    deployment_link?: string,
}


export default function Project() {
    return (
        <main>

            <ProjectList/>

            <SocialList/>
        </main>
    )
}
