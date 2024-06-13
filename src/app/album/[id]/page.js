"use client"

import FooterNav from "@/components/footernav"
import HeaderNav from "@/components/headernav"
import Tracks from "@/components/track"
import useAxios from "@/hooks/use-axios"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function Album({ params }) {
    const { id } = useParams()
    const ID = params.id

    const { error, loading, data } = useAxios(`https://api.spotify.com/v1/albums/${ID}`)
    //console.log(data && data)


    return (
        <>
            <HeaderNav heading="Album" isTransparent={true} className="absolute w-[75%] " />
            {loading && "loading..."}
            <article className="mb-[200px] w-auto">
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

                <div className="grid grid-cols-3 grid-rows-2 gap-1 mx-5 mt-4 justify-items-center">
                    <h3 className="col-start-1 row-start-1 text-md text-darkPink font-bold ">Artist</h3>
                    <Link href={"/artist/" + data?.artists[0].id}>
                        <p className="col-start-1 row-start-2 text-md text-orange">{data && data.artists[0].name}</p>
                    </Link>
                    <h3 className="col-start-2 row-start-1 text-md text-darkPink font-bold">Release Date</h3>
                    <p className="col-start-2 row-start-2 text-md capitalize text-orange">{data && data.release_date}</p>
                    <h3 className="col-start-3 row-start-1 text-md text-darkPink font-bold ">Label</h3>
                    <p className="col-start-3 row-start-2 text-md text-orange">{data && data.label}</p>
                </div>
                <section className="mx-5 mt-4">
                    <p className="text-black dark:text-white font-bold text-xl">Tracks({data && data.total_tracks})</p>
                    {data && data.tracks.items.map(track => (
                        <Tracks track={track} key={track.id} />
                    ))}


                </section>
            </article>
            {error && <p>{error}</p>}
            <FooterNav />
        </>
    )
}