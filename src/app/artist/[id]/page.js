"use client"

import FooterNav from "@/components/footernav"
import HeaderNav from "@/components/headernav"
import Tracks from "@/components/track"
import useAxios from "@/hooks/use-axios"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function Artist({ params }) {
    const { id } = useParams()
    const ID = params.id

    const { error, loading, data } = useAxios(`https://api.spotify.com/v1/artists/${ID}`)
    // console.log(data && data)


    const { error: trackerror, loading: trackloading, data: trackdata } = useAxios(`https://api.spotify.com/v1/artists/${ID}/top-tracks`)
    // console.log(trackdata && trackdata)

    const { error: albumserror, loading: albumsloading, data: albumsdata } = useAxios(`https://api.spotify.com/v1/artists/${ID}/albums`)
    //console.log(albumsdata && albumsdata);

    const { error: relatederror, loading: relatedloading, data: relateddata } = useAxios(`https://api.spotify.com/v1/artists/${ID}/related-artists`)
    console.log(relateddata && relateddata);

    return (

        <>
            <HeaderNav heading="Artist" isTransparent={true} className="absolute " />
            <article className="max-w-full">
                {loading && "loading..."}
                {data && data.images.length > 0 && (
                    <Image
                        src={data.images[0].url}
                        alt={data.name}
                        width={640}
                        height={640}
                        className="text-center m-auto relative top-0 left-0 w-full h-full z-0"
                    />
                )}
                <p className="text-4xl font-bold text-white absolute top-1 mx-5 mt-10 pt-2">{data && data.name}</p>
                <ul className=" absolute flex overflow-x-auto top-[380px] w-full mx-2">
                    {data && data.genres?.map(genre => (
                        <li key={genre} className="rounded-full px-2 mx-1 py-1.5 mt-2  bg-darkPink flex-shrink-0 ">
                            <p className="text-white text-md  font-light">{genre}</p>
                        </li>

                    ))}
                </ul>
                {/* SONGS */}
                <section className="mx-5 mt-4">
                    <p className="text-black dark:text-white font-bold text-xl">Top Tracks</p>
                    {trackloading && "loading songs..."}
                    {trackdata && trackdata.tracks.map(track => (
                        <Tracks track={track} key={track.id} />
                    ))}
                    {trackerror && <p>{trackerror}</p>}

                </section>

                {/* ALBUMS */}
                <section className="mx-5 mt-4 ">
                    <p className="text-black dark:text-white font-bold text-xl">Albums</p>
                    {albumsloading && "loading albums..."}
                    <ul className="flex overflow-x-auto h-auto">
                        {albumsdata && albumsdata.items?.map((albums) => (
                            <li key={albums.id} className="flex-shrink-0 w-[150px] pt-2 pr-2 h-fit">
                                <Link href={"/album/" + albums.id} >
                                    <Image src={albums.images[0].url} height={150} width={150} alt={albums.name} key={albums.id} />
                                    <p>{albums.name}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {albumserror && <p>{albumserror}</p>}
                </section>

                {/* RELATED ARTIST */}
                <section className="mx-5 mt-4 mb-[60px]">
                    <p className="text-black dark:text-white font-bold text-xl">Related Artists</p>
                    {relatedloading && "loading related..."}
                    <ul className="flex overflow-x-auto ">
                        {relateddata && relateddata.artists?.map((related) => (
                            <li key={related.id} className="flex-shrink-0 w-[150px] pt-2 pr-2 pb-2">
                                <Link href={"/artist/" + related.id} className="w-fit">
                                    <Image
                                        src={related.images[0].url}
                                        height={300} width={300}
                                        alt={related.name}
                                        key={related.id}
                                        className="rounded-full contain h-[142px]"
                                    />
                                    <p className="font-bold text-center text-lg">{related.name}</p>
                                </Link>
                            </li>

                        ))}
                    </ul>
                    {relatederror && <p>{relatederror}</p>}
                </section>
                {error && <p>{error}</p>}
            </article>

            <FooterNav />
        </>
    )
}