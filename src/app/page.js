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
      <article className="mx-5 w-fit-max h-[300px]">
        <Headings heading="Feed / Featured" />

        <section>
          <Link href="/playlists" >
            <Image
              src={woman}
              alt="placeholder image"
              width={400}
              height={400}
              className="text-center mx-auto mb-10 absolute " />

            <p className="underlined text-3xl w-[300px] italic font-semibold relative top-10 left-10">Check out the featured playlists</p>
          </Link>
        </section>

        <section className="">
          <Link href="/search" >
            <Image
              src={goldwoman}
              alt="placeholder image"
              width={400}
              height={400}
              className="text-center mx-auto absolute  bottom-10 " />

            <p className="underlined italic font-semibold relative top-[600px] left-9 w-[300px6] text-3xl"> Find your favourite artist</p>
          </Link>
        </section>
      </article>
      <FooterNav />
    </NextUIProvider >
  );
}
