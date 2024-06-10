"use client"

import FooterNav from "@/components/footernav";
import HeaderNav from "@/components/headernav";
import Headings from "@/components/headings";
import useAxios from "@/hooks/use-axios";
import Link from "next/link";



export default function Categories() {
    const colors = ['rgb(255, 17, 104)', 'rgb(229, 64, 40)', 'rgb(241, 141, 5)', 'rgb(242, 188, 6)', 'rgb(94, 177, 28)', 'rgb(58, 118, 52)', 'rgb(10, 190, 190)', 'rgb(0, 161, 203)', 'rgb(17, 87, 147)'];

    //fetch happening here
    const { error, loading, data } = useAxios("https://api.spotify.com/v1/browse/categories")
    // console.log(data && data.categories.items)


    return (
        <>
            <HeaderNav heading="categories" />
            <article className="mx-5">
                <Headings heading="categories" />
                {loading && "loading..."}
                {data && data.categories.items.map((category, index) => (
                    <Link href={"/category/" + category.name} key={category.name}>
                        <div style={{ backgroundColor: colors[index % colors.length] }} className="p-4 rounded-lg my-2">
                            <p className="capitalize text-white text-xl font-semibold">{category.name}</p>
                        </div>
                    </Link>
                ))}
                {error && <p>{error}</p>}
            </article>
            <FooterNav />
        </>
    )
}