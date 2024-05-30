"use client"

import FooterNav from "@/components/footernav"
import HeaderNav from "@/components/headernav"
import Headings from "@/components/headings"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Category({ params }) {
    const { name } = useParams()
    const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
    const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET

    const genre = params.name; // Specify the genre you want to search for
    const searchQuery = `genre:"${genre}"`;
    const searchType = 'track'; // Type of item you want to search for


    const [tracks, setTracks] = useState([])


    useEffect(function () {
        fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        })
            .then(response => response.json())
            .then(data => {
                const AUTH = data.access_token
                //https://api.spotify.com/v1/search?q=genre:"pop"&type=track

                fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=${searchType}&market=GB`, {
                    method: 'GET',
                    headers: {
                        "Authorization": `Bearer ${AUTH}`
                    }
                })
                    .then(response => response.json())
                    //handle data here
                    .then(data => {
                        setTracks(data.tracks.items)
                        console.log(data)
                    })
            }).catch(error => console.error("Error:", error));
    }, [])

    return (
        <>

            <article className="mx-5">
                <HeaderNav heading="categories" />
                <Headings heading={genre} />

                {tracks.map((track) => (
                    <Link href="/" key={track.name}>
                        <div className="p-4 rounded-lg my-2">
                            <p className="capitalize text-black text-xl font-semibold">{track.name} by {track.artists[0].name}</p>
                        </div>
                    </Link>
                ))}
            </article>
            <FooterNav />
        </>
    )
}