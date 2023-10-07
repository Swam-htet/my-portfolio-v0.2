import Timeline from "@/app/components/Timeline";
import Skill from "@/app/components/Skill";
import SocialList from "@/app/components/SocialList";

export default function About() {
    return (
        <main className={'min-h-screen'}>
            <div className={'container mx-auto px-20 py-5 lg:px-60'}>

                <Timeline/>

                <Skill/>

                <SocialList/>

                
                
            </div>
        </main>
    )
}
