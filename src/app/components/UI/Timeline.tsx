export default function Timeline() {
    return (
        <div className={'my-20'}>
            <h2 className={'text-2xl mb-5'}>Education Background - </h2>

            <ol className="relative border-l border-gray-200">
                <li className="mb-10 ml-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"/>
                    <time className="mb-1 text-sm font-normal leading-none text-black dark:text-white">
                        February 2022
                    </time>
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                        Title
                    </h3>
                    <p className="mb-4 text-base font-normal text-black dark:text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </li>

            </ol>


        </div>)
}