"use client"

import FooterNav from "@/components/footernav"
import HeaderNav from "@/components/headernav"
import Headings from "@/components/headings"
import useAxios from "@/hooks/use-axios"
import Link from "next/link"
import { useParams } from "next/navigation"


export default function Category({ params }) {
    const { name } = useParams()

    const genre = params.name; // Specify the genre you want to search for
    const searchQuery = `genre:"${genre}"`;
    const searchType = 'track'; // Type of item you want to search for

    //fetch happening here
    const { error, loading, data } = useAxios(`https://api.spotify.com/v1/search?q=${searchQuery}&type=${searchType}&market=GB`)
    // console.log(data && data.tracks.items)


    return (
        <>

            <article className="mx-5">
                <HeaderNav heading="categories" />
                <Headings heading={genre} />
                {loading && "loading..."}
                {data && data.tracks.items.map((track) => (
                    <Link href="/" key={track.name}>
                        <div className="p-4 rounded-lg my-2">
                            <p className="capitalize text-black text-xl font-semibold">{track.name} by {track.artists[0].name}</p>
                        </div>
                    </Link>
                ))}
                {error && <p>{error}</p>}
            </article>
            <FooterNav />
        </>
    )
}