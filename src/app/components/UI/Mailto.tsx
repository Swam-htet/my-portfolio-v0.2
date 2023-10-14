import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

export default function Mailto() {
    return (<div className={''}>
        <Link href={'mailto:swamhtet129@gmail.com'}
              className={"flex text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-black-600 dark:focus:ring-gray-800"}>
            Sent Mail
            <FontAwesomeIcon icon={faPaperPlane} className={'w-3 ms-2'}/>
        </Link>
    </div>)
}