import FooterNav from "@/components/footernav";
import HeaderNav from "@/components/headernav";
import Headings from "@/components/headings";
import Link from "next/link";

export default function Settings() {
    return (
        <>
            <HeaderNav heading="Settings" />
            <article className="mx-5">
                <Headings heading="Settings" />
                <Link href="/login">
                    <p className="bg-[#1DB954] rounded-full px-3.5 py-3 m-auto text-white text-center w-fit">Sign in with spotify</p>
                </Link>
            </article>
            <FooterNav />
        </>
    )
}