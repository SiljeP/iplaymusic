"use client"

import Link from "next/link";
import { AiOutlineSpotify } from "react-icons/ai";

export default function LogIn() {

    return (
        <>
            <h1 className="mt-10 ml-10 text-4xl font-poppins text-purple font-bold capitalize">Log in</h1>
            <div className="flex h-screen justify-center items-center">
                <Link className="bg-[#1DB954] rounded-full px-3.5 py-3 "
                    href="/">
                    <div className="flex items-center font-poppins text-white text-2xl">
                        <AiOutlineSpotify className="text-white text-6xl pr-2" />
                        <p>Sign in with Spotify</p>
                    </div>
                </Link>
            </div>
        </>
    )

}