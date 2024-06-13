"use client"
import FooterNav from "@/components/footernav";
import HeaderNav from "@/components/headernav";
import Image from "next/image";
import { useParams } from "next/navigation"
import useAxios from "@/hooks/use-axios";
import Tracks from "@/components/track";

export default function Playlist({ params }) {

    const { id } = useParams()
    const ID = params.id

    //fetch happening here
    const { error, loading, data } = useAxios(`https://api.spotify.com/v1/playlists/${ID}`)
    console.log(data && data)

    return (
        <>
            <HeaderNav heading={data && data.name} />
            <article className="mx-5 mb-[200px]">
                <div className="p-4 rounded-lg my-2 m-auto text-center " key={data && data.id}>
                    {loading && "loading..."}
                    {data && data.images.length > 0 && (
                        <Image
                            src={data.images[0].url}
                            alt={data.name}
                            width={300}
                            height={300}
                            className="text-center m-auto"
                        />
                    )}
                    <p className="capitalize text-black dark:text-white text-xl font-semibold">{data && data.name}</p>
                    <p dangerouslySetInnerHTML={{ __html: data && data.description }} />
                </div>
                <ul>
                    {data && data.tracks.items.map(track => (
                        <Tracks track={track.track} key={track.track.id} />
                    ))}
                    {error && <p>{error}</p>}
                </ul>
            </article>
            <FooterNav />


        </>
    )
}