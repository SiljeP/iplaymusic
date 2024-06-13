"use client"

import FooterNav from "@/components/footernav"
import HeaderNav from "@/components/headernav"
import Headings from "@/components/headings"
import Tracks from "@/components/track"
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
    console.log(data && data)

    //WANT TO PUT PLAYLIST FROM CATEGORIES BUT SPOTIFYS ENDPOINT IS NOT VERY GOOD..MAYBE ONLY SEEDS?
    // const { playlisterror, playlistloading, playlistdata } = useAxios(`https://api.spotify.com/v1/browse/categories/${genre}/playlists`)
    // console.log(data && data)


    return (
        <>

            <article className="mx-5 mb-[200px]">
                <HeaderNav heading="categories" />
                <Headings heading={genre} />
                {loading && "loading..."}
                <h2 className="font-bold text-xl text-black dark:text-white">Tracks</h2>
                {data && data.tracks.items.map((track) => (
                    <Link href="/" key={track.name}>
                        <Tracks track={track} key={track.id} />
                    </Link>
                ))}
                {error && <p>{error}</p>}

                {/* <section>
                    <h2 className="font-bold text-black">Playlists</h2>


                </section> */}
            </article>


            <FooterNav />
        </>
    )
}