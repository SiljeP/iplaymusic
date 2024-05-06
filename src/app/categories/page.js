import FooterNav from "@/components/footernav";
import HeaderNav from "@/components/headernav";
import Headings from "@/components/headings";


export default function Categories() {

    return (
        <>
            <HeaderNav heading="categories" />
            <article className="mx-5">
                <Headings heading="categories" />
            </article>
            <FooterNav />
        </>
    )
}