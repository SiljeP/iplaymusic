import Link from "next/link";
import { IoMdSettings } from "react-icons/io";
import { IoMdWifi } from "react-icons/io";
import { TbActivityHeartbeat } from "react-icons/tb";

//dark:shadow-[0px_-2px_18px_2px_#4A5568]

export default function FooterNav() {
    return (
        <>
            <nav className='fixed bottom-0 w-full pb-2 shadow-[0px_-4px_18px_3px_#00000024] bg-white '>
                <ul className='flex justify-evenly items-center p-3' >
                    <li>
                        <Link href="/" >
                            <TbActivityHeartbeat className="text-3xl" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                            <div className="rounded-full bg-gradientPrimary p-1">
                                <IoMdWifi className="text-white text-3xl" />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                            <IoMdSettings style={{ fill: "linear-gradient(to right, #FF6A00, #EE0979)" }} className="" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}