import Intro from "@/app/components/Intro";
import Gallery from "@/app/components/Gallery";
import SocialList from "@/app/components/SocialList";

export default function Home() {
    return (
        <main className={'min-h-screen'}>
            <div className={'container mx-auto px-20 py-5 lg:px-60'}>
                <Intro/>

                <Gallery/>

                <SocialList/>

            </div>

        </main>
    )
}
