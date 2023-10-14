import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

export default function Mailto() {
    return (<div className={''}>
        <Link href={'mailto:swamhtet129@gmail.com'}
              className={"text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"}>
            Sent Mail
            <FontAwesomeIcon icon={faPaperPlane} className={'w-3 ms-2'}/>
        </Link>
    </div>)
}