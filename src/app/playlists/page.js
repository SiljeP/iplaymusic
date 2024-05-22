"use client"
import FooterNav from "@/components/footernav";
import HeaderNav from "@/components/headernav";
import Headings from "@/components/headings";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Playlists() {
    const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
    const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;

    const [playlists, setPlaylists] = useState([]);

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
                console.log(data);
                const AUTH = data.access_token;

                fetch('https://api.spotify.com/v1/browse/featured-playlists', {
                    method: 'GET',
                    headers: {
                        "Authorization": `Bearer ${AUTH}`
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        setPlaylists(data.playlists.items);
                        console.log(data.playlists.items);
                    })
                    .catch(error => console.error("Error fetching playlists:", error));
            })
            .catch(error => console.error("Error fetching token:", error));
    }, [CLIENT_ID, CLIENT_SECRET]);




    return (
        <>
            <HeaderNav heading="Playlists" />
            <article className="mx-5">
                <Headings heading="Playlists" />
                {playlists.map((playlist) => (
                    <Link href={"/playlist/" + playlist.id} key={playlist.id}>
                        <div className="p-4 rounded-lg my-2">
                            <Image
                                src={playlist.images[0].url}
                                alt={playlist.name}
                                width={150}
                                height={150}
                                className="rounded-lg shadow-lg" />
                            <p className="capitalize text-black text-l font-semibold">{playlist.name}</p>
                        </div>
                    </Link>
                ))}
            </article>
            <FooterNav />
        </>
    )
}