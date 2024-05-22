"use client"

import FooterNav from "@/components/footernav";
import HeaderNav from "@/components/headernav";
import Headings from "@/components/headings";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Categories() {
    const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
    const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET


    const [categories, setCategories] = useState([])

    const colors = ['rgb(255, 17, 104)', 'rgb(229, 64, 40)', 'rgb(241, 141, 5)', 'rgb(242, 188, 6)', 'rgb(94, 177, 28)', 'rgb(58, 118, 52)', 'rgb(10, 190, 190)', 'rgb(0, 161, 203)', 'rgb(17, 87, 147)'];


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
                console.log(data)
                const AUTH = data.access_token

                fetch(`https://api.spotify.com/v1/browse/categories`, {
                    method: 'GET',
                    headers: {
                        "Authorization": `Bearer ${AUTH}`
                    }
                })
                    .then(response => response.json())
                    //handle data here
                    .then(data => {
                        setCategories(data.categories.items)
                        console.log(data.categories.items)
                    })
            }).catch(error => console.error("Error:", error));
    }, [CLIENT_ID, CLIENT_SECRET])

    return (
        <>
            <HeaderNav heading="categories" />
            <article className="mx-5">
                <Headings heading="categories" />
                {categories.map((category, index) => (
                    <Link href={"/category/" + category.name} key={category.name}>
                        <div style={{ backgroundColor: colors[index % colors.length] }} className="p-4 rounded-lg my-2">
                            <p className="capitalize text-white text-xl font-semibold">{category.name}</p>
                        </div>
                    </Link>
                ))}
            </article>
            <FooterNav />
        </>
    )
}