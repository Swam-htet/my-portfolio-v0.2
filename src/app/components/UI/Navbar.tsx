import Link from "next/link";

export default function Navbar() {
    return (<nav className={'bg-zinc-200 shadow rounded m-2'}>
        <div className={'container mx-auto px-5 py-5 lg:px-40'}>
            <ul className={'flex gap-10 text-gray-800'}>
                <li className={'hover:underline hover:text-gray-600'}>
                    <Link href={'/'}>
                        Home
                    </Link>
                </li>
                <li className={'hover:underline hover:text-gray-600'}>
                    <Link href={'#about'}>
                        About
                    </Link>
                </li>
                <li className={'hover:underline hover:text-gray-600'}>
                    <Link href={'#project'}>
                        Projects
                    </Link>
                </li>
            </ul>
        </div>


    </nav>)
}