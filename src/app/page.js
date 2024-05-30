import FooterNav from "@/components/footernav";
import HeaderNav from "@/components/headernav";
import Headings from "@/components/headings";
import Link from "next/link";
import { NextUIProvider } from "@nextui-org/react";


export default function Home() {
  return (

    <NextUIProvider>
      <HeaderNav heading="Feed" />
      <article className="mx-5">
        <Headings heading="Feed / Featured" />
        <Link href="/login">
          <p className="bg-[#1DB954] rounded-full px-3.5 py-3 m-auto text-white text-center w-fit">Sign in with Spotify</p>
        </Link>
      </article>
      <FooterNav />
    </NextUIProvider >
  );
}
