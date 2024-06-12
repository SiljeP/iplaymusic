"use client"
import FooterNav from "@/components/footernav";
import HeaderNav from "@/components/headernav";
import Headings from "@/components/headings";
import Tracks from "@/components/track";
import Axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Search() {
    const [accesToken, setAccesToken] = useState("")
    const [search, setSearch] = useState([])
    const CLIENT_SECRET = "09fe357292fe412d851bd7e6a556c9d9"

    useEffect(() => {
        fetch("https:accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        })
            .then(response => response.json())
            .then(data => {
                setAccesToken(data.access_token)
            }, [])
    })

    async function searchHandler(event) {
        if (event.key === 'Enter') {
            const response = await Axios.get(`https:api.spotify.com/v1/search?q=${event.target.value}&type=artist,track,album&limit=10`, {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${accesToken}`
                }
            })
            console.log(response.data)
            setSearch(response.data)

        }
    }

    return (
        <>
            <HeaderNav heading="Search" />
            <article className="mx-5">
                <Headings heading="Search" />
                <input
                    type="search"
                    placeholder="Search"
                    onKeyDown={searchHandler}
                    className="border border-gray-500 px-2 rounded-md w-full transition-all duration-200 focus:w-[400px] text-xl" />

                <div>
                    {search.artists?.items?.length > 0 && (
                        <>
                            <Headings heading="Artists" />
                            <ul className="flex overflow-x-auto ">
                                {search && search.artists?.items?.map((artist) => (
                                    <li key={artist.id} className="flex-shrink-0 w-[150px] pt-2 pr-2 pb-2">
                                        <Link href={"/artist/" + artist.id} className="w-fit">
                                            <Image src={artist?.images[0]?.url} height={150} width={150} alt={artist.name} />
                                            <p>{artist.name}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>

                    )}
                    {search.artists?.items?.length > 0 && (
                        <>
                            <Headings heading="Albums" />
                            <ul className="flex overflow-x-auto ">
                                {search && search.albums?.items?.map((albums) => (
                                    <li key={albums.id} className="flex-shrink-0 w-[150px] pt-2 pr-2 pb-2">
                                        <Link href={"/album/" + albums.id}>
                                            <Image src={albums.images[0].url} height={150} width={150} alt={albums.name} key={albums.id} />
                                            <p>{albums.name}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>

                    )}
                    {search.tracks?.items?.length > 0 && (
                        <>
                            <Headings heading="Songs" />
                            <ul>
                                {search && search.tracks?.items?.map((track) => (
                                    <Tracks track={track} key={track.id} />

                                ))}
                            </ul>
                        </>

                    )}

                </div>
            </article >
            <FooterNav />

        </>
    )
}