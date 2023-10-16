import {ProjectModel} from "@/app/components/page/Project";
import ProjectBox from "@/app/components/UI/ProjectBox";

export default function ProjectList() {
    let list: ProjectModel[] = [
        {
            title: "Retail API with Express.js",
            description:"Fully CRUD RESTful API server with Express.js framework and MongoDB for DBMS.",
            github_link: "https://github.com/Swam-htet/Retail-api"
        },
        {
            title: "Home Application Rental System",
            description:"Dot net windows form application with Microsoft Access Database.",
            github_link: "https://github.com/Swam-htet/a-home-appliance-rental-application"
        },
        {
            title: "My Portfolio",
            description:"By using Next.js, tailwind CSS, TypeScript.",
            github_link: "https://github.com/Swam-htet/my-portfolio-v0.2"
        },
        {
            title: "Laravel Blog",
            description:"This project is with Laravel framework by the reference of Professional Web Developer by Ei Maung",
            github_link: "https://github.com/Swam-htet/laravel-SayarEiMaung"
        }
    ];

    let activities: ProjectModel[] = [
        {
            title: "Express.js Deployment on Vercel",
            description:"Deployment testing the express.js framework with MongoDB atlas on Vercel.",
            github_link: "https://github.com/Swam-htet/Express-deployment-test"
        },
        {
            title: "Laravel API project Boilerplate",
            description:"Laravel API boilerplate for backend development with MySQL database.",
            github_link: "https://github.com/Swam-htet/Express-deployment-test"
        },
        {
            title: "Todo project with redux toolkit on Next.js",
            description:"Next.js with redux toolkit, typescript and fully CRUD todos application.",
            github_link: "Next.js-with-redux"
        },
        
    ];
    return (<div>
        <h1 className={'text-2xl mt-5 text-black mb-5'}>Projects - </h1>
        <div className={'grid grid-cols-1 xl:grid-cols-2 gap-5'}>
            {list.map((project, index) => <ProjectBox key={index} project={project}/>)}
        </div>

        <h1 className={'text-2xl mt-10 text-black mb-5'}>Current Activities - </h1>
        <div className={'grid grid-cols-1 gap-5'}>
            {activities.map((project, index) => <ProjectBox key={index} project={project}/>)}
        </div>
        
    </div>);
}