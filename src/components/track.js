"use client"

import PlayCircle from "../../public/icons/playcircle"


export default function Tracks({ track }) {

    return (
        <>
            <li className="flex mt-4 items-center">
                <PlayCircle className="inline text-3xl" />
                <div className="px-4 ">
                    <p className="font-bold text-xl">{track.name}</p>
                    <p className="text-md">{track.artists.map(artist => artist.name).join(', ')}</p>
                </div>
            </li>
        </>
    )
}