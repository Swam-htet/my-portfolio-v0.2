import Intro from "@/app/components/UI/Intro";
import Gallery from "@/app/components/UI/Gallery";

export default function Home(){
    return (<div className={'bg-zinc-200 shadow-xl rounded-xl p-5 md:p-10'}>
        <Intro/>

        <Gallery/>

    </div>)
}