"use client"
import { IoChevronBack } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { useRouter } from 'next/navigation'


export default function HeaderNav({ heading }) {
    const router = useRouter()
    return (
        <>
            <div className="flex justify-between mt-6 mx-4">
                <IoChevronBack onClick={() => router.back()} />
                <h2 className="font-light uppercase text-sm tracking-wide">{heading}</h2>
                <Link href="/search">
                    <IoIosSearch />
                </Link>
            </div>
        </>
    )
}