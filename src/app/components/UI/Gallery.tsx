import Image from "next/image";

export default function Gallery() {
    return (
        <div className="grid grid-cols-3 gap-10 my-5 md:my-20">
            <div className="w-full rounded-lg col-span-3 xl:col-span-1">
                <Image src={"/photo_2.jpeg"} width={400} className={'w-full rounded'} height={400} alt={'image'}/>
            </div>
            <div className="w-full rounded-lg col-span-3 xl:col-span-2">
                <h2 className={'text-2xl mb-5 text-black'}></h2>
                <p className={'text-base  indent-16 text-black'}>

                    I am well-versed in web development technologies expecially learning front-end web development.
                    Express.js for JavaScript Backend RESTful API is a backend development framework that interests me.
                    For backend development, I am also studying the Laravel framework.
                    I intend to work toward being a full-stack web developer. I have expertise working with a range of web development tools
                    and technologies, including as Bootstrap, jQuery, and Node.js, in addition to these projects.
                </p>
            </div>
            <div className="w-full rounded-lg col-span-3 xl:col-span-2 pt-10">
                <p className={'text-base  indent-16 text-black'}>
                    I have used Next.js, the Reudx toolkit, Tailwind CSS, and TypeScript,
                    jQuery to add interactivity and animations to web pages and Bootstrap to build responsive layouts for websites. I have also developed server-side applications and APIs using Node.js.
                    I.e., I am a strong contender for this position because I have a variety of talents and expertise.
                </p>
            </div>
            <div className="w-full rounded-lg col-span-3 xl:col-span-1">
                <Image src={"/photo_1.jpeg"} width={400} className={'w-full rounded'} height={400} alt={'image'}/>
            </div>
        </div>
    )
}