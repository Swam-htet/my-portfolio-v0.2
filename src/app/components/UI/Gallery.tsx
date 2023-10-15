import Image from "next/image";

export default function Gallery() {
    return (
        <div className="grid grid-cols-3 gap-10 my-20">
            <div className="w-full rounded-lg col-span-3 xl:col-span-1">
                <Image src={"/photo_2.jpeg"} width={400} className={'w-full rounded'} height={400} alt={'image'}/>
            </div>
            <div className="w-full rounded-lg col-span-3 xl:col-span-2 pt-10">
                <h2 className={'text-2xl mb-5 text-black'}>Hi, Im Swam Htet.</h2>
                <p className={'text-base  indent-16 text-black'}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="w-full rounded-lg col-span-3 xl:col-span-2 pt-10">
                <h2 className={'text-2xl mb-5 text-black'}>Hi, Im Swam Htet.</h2>
                <p className={'text-base  indent-16 text-black'}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="w-full rounded-lg col-span-3 xl:col-span-1">
                <Image src={"/photo_1.jpeg"} width={400} className={'w-full rounded'} height={400} alt={'image'}/>
            </div>

        </div>
    )
}