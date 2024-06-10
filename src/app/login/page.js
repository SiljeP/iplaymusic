"use client"

import FooterNav from "@/components/footernav";
import { AiOutlineSpotify } from "react-icons/ai";


export default function LogIn() {


    return (
        <>
            <h1 className="mt-10 ml-10 text-4xl font-poppins text-purple font-bold capitalize">Log in</h1>
            <div className="flex h-screen justify-center items-center ">
                <a href={"https://accounts.spotify.com/authorize?"
                    + "response_type=code&"
                    + "redirect_uri=http://localhost:3000/callback&"
                    + `client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&`
                    + "show_dialog=true&"
                    + "scopes=user-read-private user-read-email"}
                    className="bg-[#1DB954] rounded-full px-3.5 py-3 "  >
                    <div className="flex items-center font-poppins text-white text-2xl">
                        <AiOutlineSpotify className="text-white text-6xl pr-2" />
                        <p> Sign in with Spotify</p>
                    </div>

                </a>
            </div >
            <FooterNav />
        </>
    )
}