"use client"
import FooterNav from "@/components/footernav";
import HeaderNav from "@/components/headernav";
import Headings from "@/components/headings";
import useAxios from "@/hooks/use-axios";
import Image from "next/image";
import Link from "next/link";


export default function Playlists() {
    //fetch happening here
    const { error, loading, data } = useAxios('https://api.spotify.com/v1/browse/featured-playlists')
    // console.log(data && data.playlists.items)

    return (
        <>
            <HeaderNav heading="Playlists" />
            <article className="mx-5 mb-[200px]">
                <Headings heading="Playlists" />
                <section className="m-auto ">
                    {data && data.playlists.items.map((playlist) => (
                        <div className="p-4 rounded-lg my-2 w-fit mx-auto " key={playlist.id}>
                            <Link href={"/playlist/" + playlist.id} className="w-fit">
                                <Image
                                    src={playlist.images[0].url}
                                    alt={playlist.name}
                                    width={250}
                                    height={250}
                                    className="rounded-lg shadow-lg" />
                                <p className="capitalize text-black text-l font-semibold text-center">{playlist.name}</p>

                            </Link>
                        </div>
                    ))}
                </section>
            </article>
            <FooterNav />
        </>
    )
}