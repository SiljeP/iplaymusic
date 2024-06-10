"use client"
import FooterNav from "@/components/footernav";
import HeaderNav from "@/components/headernav";
import Headings from "@/components/headings";
import Axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;


export default function Search() {

    const [searchArtist, setSearchArtist] = useState([])
    const [searchAlbum, setSearchAlbum] = useState([])
    const [searchTrack, setSearchTrack] = useState([])
    const [accesToken, setAccesToken] = useState("")

    useEffect(() => {
        fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
        })
            .then(response => response.json())
            .then(data => {
                setAccesToken(data.access_token)
            }, [])
    })

    async function searchHandler(event) {
        if (event.key === 'Enter' && accesToken) {
            const response = await Axios.get(`https://api.spotify.com/v1/search?q=${event.target.value}&type=artist,track,album&limit=5`, {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${accesToken}`
                }
            })
            console.log(response.data)
            setSearchArtist(response.data.artists.items)
            setSearchAlbum(response.data)

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
                    className="border border-gray-500 px-2 rounded-md w-full transition-all duration-200 focus:w-[300px]" />

                <div>
                    <h2>Results</h2>
                    {searchArtist?.map((artist) => (
                        <>
                            <Headings heading="Artist" />
                            <Image src={artist.images[0].url} height={150} width={150} alt={artist.name} key={artist.id} />
                            <p>{artist.name}</p>
                        </>
                    ))}
                </div>
            </article>
            <FooterNav />

        </>
    )
}