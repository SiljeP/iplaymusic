"use client"
import FooterNav from "@/components/footernav";
import HeaderNav from "@/components/headernav";
import Image from "next/image";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import PlayCircle from "../../../../public/icons/playcircle";

export default function Playlist({ params }) {

    const { id } = useParams()

    const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
    const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;
    const ID = params.id

    const [playlist, setPlaylist] = useState({});

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
                const AUTH = data.access_token;

                fetch(`https://api.spotify.com/v1/playlists/${ID}`, {
                    method: 'GET',
                    headers: {
                        "Authorization": `Bearer ${AUTH}`
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        setPlaylist(data);
                        console.log(data);
                    })
                    .catch(error => console.error("Error fetching playlist:", error));
            })
            .catch(error => console.error("Error fetching token:", error));
    }, [CLIENT_ID, CLIENT_SECRET, ID]);


    return (
        <>
            <HeaderNav heading={playlist.name} />
            <article className="mx-5">
                <div className="p-4 rounded-lg my-2 m-auto text-center " key={playlist.id}>
                    {playlist.images && playlist.images.length > 0 && (
                        <Image
                            src={playlist.images[0].url}
                            alt={playlist.name}
                            width={300}
                            height={300}
                            className="text-center m-auto"
                        />
                    )}
                    <p className="capitalize text-black text-xl font-semibold">{playlist.name}</p>
                    <p>{playlist.description}</p>
                </div>
                <ul>
                    {playlist.tracks?.items?.map(item => (
                        <li key={item.track.id} className="flex mt-4 items-center">
                            <PlayCircle className="inline text-3xl" />
                            <div className="px-4 ">
                                <p className="font-bold text-xl">{item.track.name}</p>
                                <p className="text-md">{item.track.artists.map(artist => artist.name).join(', ')}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </article>
            <FooterNav />


        </>
    )
}