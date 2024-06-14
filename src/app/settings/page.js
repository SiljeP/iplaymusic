"use client"
import FooterNav from "@/components/footernav";
import HeaderNav from "@/components/headernav";
import Headings from "@/components/headings";
import Link from "next/link";
import useAxios from "@/hooks/use-axios";
import Tracks from "@/components/track";
import Image from "next/image";
import DarkMode from "@/components/darkmode";
import { useLoginStatus } from "@/hooks/use-login-cookie";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Settings() {
    const isLoggedIn = useLoginStatus();
    //const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     // const cookieValue = Cookies.get('isLoggedIn');
    //     // console.log(cookieValue);
    //     // setIsLoggedIn(cookieValue === "true");
    //     console.log(document);
    // }, []);

    const { error, loading, data } = useAxios(`https://api.spotify.com/v1/me`)
    // console.log(data && data)

    const { error: toperror, loading: toploading, data: topdata } = useAxios('https://api.spotify.com/v1/me/top/artists')
    //console.log(topdata && topdata)

    const { error: toptrackserror, loading: toptracksloading, data: toptracksdata } = useAxios('https://api.spotify.com/v1/me/top/tracks')
    //console.log(toptracksdata && toptracksdata)


    return (
        <>
            <HeaderNav heading="Settings" />
            <article className="mx-5 mb-[100px]">
                <Link href="/login">
                    <p className="bg-[#1DB954] rounded-full px-3.5 py-3 mx-auto mt-7 text-white text-center w-fit">Sign in with spotify</p>
                </Link>
                <section className="flex justify-between my-10">
                    <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradientPrimary">Darkmode</p>
                    <DarkMode />
                </section>

                {isLoggedIn && ( // Conditionally render all content if logged in
                    <>
                        {/* PERSONAL INFO HERE */}
                        <Headings heading={`Hello ${data && data.display_name}!`} className="italic text-center m-auto" />
                        <p className="font-semibold text-md text-center">{`You have ${data && data.followers.total} followers`}</p>

                        {/* TOP ARTIST */}
                        <section>
                            <h3 className="font-bold text-darkPink mt-5">{`${data && data.display_name}'s top artists:`}</h3>
                            {toploading && "loading artists..."}
                            <ul className="flex overflow-x-auto ">
                                {topdata && topdata.items.map(artist => (
                                    <li key={artist.id} className="flex-shrink-0 w-[150px] pt-2 pr-2 pb-2">
                                        <Link href={"/artist/" + artist?.id} key={artist.id}>
                                            <Image
                                                src={artist.images[0].url}
                                                height={300} width={300}
                                                alt={artist.name}
                                                key={artist.id}
                                                className="rounded-full contain h-[142px]"
                                            />
                                            <p className=" text-center pt-1 font-semibold text-black dark:text-white">{artist.name}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            {toperror && <p>{toperror}</p>}
                        </section>

                        {/* TOP TRACKS */}
                        <h3 className="font-bold text-darkPink mt-5">{`${data && data.display_name}'s top songs:`}</h3>
                        {toptracksloading && "loading songs..."}
                        {toptracksdata && toptracksdata.items.map(track => (
                            <Tracks track={track} key={track.id} />
                        ))}
                        {toperror && <p>{toperror}</p>}
                    </>
                )}

                {!isLoggedIn && ( // Optionally show a message if not logged in
                    <p className="text-center mt-10">Please log in to see your settings.</p>
                )}
            </article>
            <FooterNav />
        </>
    );
}