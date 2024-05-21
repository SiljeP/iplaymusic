import Link from "next/link";
import { IoMdWifi } from "react-icons/io";
import MaterialSymbolsSettings from "../../public/icons/symbolssettings";
import HeartbeatIcon from "../../public/icons/heartbeaticon";
import Microphone from "../../public/icons/microphone";
import SoundSampler from "../../public/icons/soundsampler";


//dark:shadow-[0px_-2px_18px_2px_#4A5568]

export default function FooterNav() {
    return (
        <>
            <nav className='fixed bottom-0 w-full pb-2 shadow-[0px_-4px_18px_3px_#00000024] bg-white '>
                <ul className='flex justify-evenly items-center p-3' >
                    <li>
                        <Link href="/" >
                            <div className="flex flex-col justify-center items-center">
                                <HeartbeatIcon className="text-3xl" />
                                <p className="text-xs uppercase text-transparent bg-clip-text bg-gradientPrimary ">Feed</p>
                            </div>

                        </Link>
                    </li>
                    <li>
                        <Link href="/categories" >
                            <div className="flex flex-col justify-center items-center">
                                <Microphone className="text-3xl" />
                                <p className="text-xs uppercase text-transparent bg-clip-text bg-gradientPrimary ">categories</p>
                            </div>


                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                            <div className="rounded-full bg-gradientPrimary p-1">
                                <IoMdWifi className="text-white text-3xl" />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                            <div className="flex flex-col justify-center items-center">
                                <SoundSampler className="text-3xl" />
                                <p className="text-xs uppercase text-transparent bg-clip-text bg-gradientPrimary ">Playlists</p>
                            </div>

                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                            <div className="flex flex-col justify-center items-center">
                                <MaterialSymbolsSettings className="text-3xl" />
                                <p className="text-xs uppercase text-transparent bg-clip-text bg-gradientPrimary ">Settings</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}