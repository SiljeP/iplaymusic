"use client"
import FooterNav from "@/components/footernav";
import HeaderNav from "@/components/headernav";
import Headings from "@/components/headings";
import Link from "next/link";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "/public/icons/moonicon.jsx";
import { SunIcon } from "/public/icons/sunicon.jsx";

//normal switch
/* <Switch defaultSelected aria-label="Darkmode" /> */

export default function Settings() {
    return (
        <>
            <HeaderNav heading="Settings" />
            <article className="mx-5">
                <Headings heading="Settings" />
                <Link href="/login">
                    <p className="bg-[#1DB954] rounded-full px-3.5 py-3 m-auto text-white text-center w-fit">Sign in with spotify</p>
                </Link>
                <section className="flex justify-between mt-10">
                    <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradientPrimary">Darkmode</p>

                    <Switch
                        defaultSelected
                        size="lg"
                        color="secondary"
                        thumbIcon={({ isSelected, className }) =>
                            isSelected ? (
                                <SunIcon className={className} />
                            ) : (
                                <MoonIcon className={className} />
                            )
                        }
                    >
                    </Switch>
                </section>

            </article>
            <FooterNav />
        </>
    )
}