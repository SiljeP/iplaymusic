"use client"
import { IoChevronBack } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { useRouter } from 'next/navigation'


export default function HeaderNav({ heading, isTransparent, className }) {
    const router = useRouter()

    const backgroundClass = isTransparent ? 'bg-transparent' : 'bg-white dark:bg-purple '; // Set background class based on prop

    return (
        <>
            <div className={`flex justify-between mt-6 w-[95%] mx-4 ${backgroundClass} ${className} z-50 items-center `}>
                <IoChevronBack onClick={() => router.back()} />
                <h2 className="font-light uppercase text-sm tracking-wide">{heading}</h2>
                <Link href="/search">
                    <IoIosSearch />
                </Link>
            </div>
        </>
    )
}