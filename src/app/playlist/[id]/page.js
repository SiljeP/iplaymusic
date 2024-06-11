"use client"
import FooterNav from "@/components/footernav";
import HeaderNav from "@/components/headernav";
import Image from "next/image";
import { useParams } from "next/navigation"
import PlayCircle from "../../../../public/icons/playcircle";
import useAxios from "@/hooks/use-axios";

export default function Playlist({ params }) {

    const { id } = useParams()
    const ID = params.id

    //fetch happening here
    const { error, loading, data } = useAxios(`https://api.spotify.com/v1/playlists/${ID}`)
    console.log(data && data)

    return (
        <>
            <HeaderNav heading={data && data.name} />
            <article className="mx-5">
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
                    <p className="capitalize text-black text-xl font-semibold">{data && data.name}</p>
                    <p dangerouslySetInnerHTML={{ __html: data && data.description }} />
                </div>
                <ul>
                    {data && data.tracks?.items?.map(item => (
                        <li key={item.track.id} className="flex mt-4 items-center">
                            <PlayCircle className="inline text-3xl" />
                            <div className="px-4 ">
                                <p className="font-bold text-xl">{item.track.name}</p>
                                <p className="text-md">{item.track.artists.map(artist => artist.name).join(', ')}</p>
                            </div>
                        </li>
                    ))}
                    {error && <p>{error}</p>}
                </ul>
            </article>
            <FooterNav />


        </>
    )
}