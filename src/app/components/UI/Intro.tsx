import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";

export default function Intro() {
    return (
        <div className={'p-10'}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2 className={'text-2xl mb-5 text-black'}>Hi, I'm Swam Htet</h2>
            <p className={'text-base  indent-16 text-black'}>
                I am interested in Web development to create efficient and user-centric web applications. With a solid foundation in computer science and eager in various programming languages and frameworks, my curiosity drives me to continuously learn and adapt to new technologies, ensuring that I stay at the forefront of industry trends. I am an effective communicator and collaborative team member, having successfully contributed to cross-functional projects that require both technical expertise and effective teamwork.
            </p>


            <Link href={"https://drive.google.com/file/d/1wQhj0nLVVm6yPPjZd9rjw5lST6dOK9xW/view?usp=drive_link"}
                  className={"mt-4 text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"}>
                Download CV
                <FontAwesomeIcon icon={faDownload} className={'ms-5 w-3'}/>
            </Link>


        </div>
    );
}