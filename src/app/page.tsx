import About from "@/app/components/page/About";
import Project from "@/app/components/page/Project";
import Home from "@/app/components/page/Home";

export default function Main() {
    return (
        <main className={'min-h-screen'}>
            <div id={'home'}>
                <Home/>
            </div>
            <div id={'about'}>
                <About/>
            </div>
            <div id={'project'}>
                <Project/>
            </div>
        </main>
    )
}
