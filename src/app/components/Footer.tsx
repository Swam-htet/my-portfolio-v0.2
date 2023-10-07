import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white shadow-2xl m-4 rounded-2xl">
            <div className="container mx-auto p-7 flex justify-between">
                <span className="text-sm pt-3 text-gray-500">
                    © 2023 by Alphar.
                </span>
                <ul className="flex gap-2 md:gap-5 items-center mt-3 text-sm text-gray-500">
                    <li>
                        <Link href="/" className="mr-4 hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="mr-4 hover:underline">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="mr-4 hover:underline">
                            Projects
                        </Link>
                    </li>

                </ul>
            </div>
        </footer>

    )
}