import SocialList from "@/app/components/UI/SocialList";
import ProjectList from "@/app/components/UI/ProjectList";

export interface ProjectModel {
    title: string,
    github_link: string,
    deployment_link?: string,
    description:string
}


export default function Project() {
    return (
        <div className={'bg-zinc-200 shadow-xl rounded-xl p-10 mt-10'}>

            <ProjectList/>

            <SocialList/>
            <div>
                <p className={'mb-2 text-black'}>Address : Shwe Hnin Si Road, San Chaung Township, Yangon</p>
                <p className={'mb-2 text-black'}>Email : swamhtet129@gmail.com</p>
                <p className={'mb-2 text-black'}>Phone Number : 09951538463</p>


            </div>
        </div>
    )
}
