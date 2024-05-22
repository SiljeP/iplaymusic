import FooterNav from "@/components/footernav";
import HeaderNav from "@/components/headernav";
import Headings from "@/components/headings";

export default function Playlists() {
    return (
        <>
            <HeaderNav heading="Search" />
            <article className="mx-5">
                <Headings heading="Search" />
            </article>
            <FooterNav />
        </>
    )
}