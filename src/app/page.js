import FooterNav from "@/components/footernav";
import HeaderNav from "@/components/headernav";
import Headings from "@/components/headings";
import Link from "next/link";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import woman from "/public/images/nakywoman.png"
import goldwoman from "/public/images/pexelwoman.png"


export default function Home() {
  return (

    <NextUIProvider>
      <HeaderNav heading="Feed" />
      <article className="mx-5">
        <Headings heading="Feed / Featured" />

        <section>
          <Image
            src={woman}
            alt="placeholder image"
            width={400}
            height={400}
            className="text-center mx-auto mb-10 " />
          <Link href="/playlists" >
            <p className="underlined italic font-semibold">Check out the featured playlists</p>
          </Link>
        </section>

        <section className="mb-[200px]">
          <Image
            src={goldwoman}
            alt="placeholder image"
            width={300}
            height={300}
            className="text-center mx-auto " />
          <Link href="/search" >
            <p className="underlined italic font-semibold"> Find your favourite artist</p>
          </Link>
        </section>
      </article>
      <FooterNav />
    </NextUIProvider >
  );
}
