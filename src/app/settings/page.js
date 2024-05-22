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
                    <p className="bg-black text-white m-10">Login</p>
                </Link>
            </article>
            <FooterNav />
        </>
    )
}