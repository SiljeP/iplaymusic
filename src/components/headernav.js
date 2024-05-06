import { IoChevronBack } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";


export default function HeaderNav({ heading }) {
    return (
        <>
            <div className="flex justify-between mt-6 mx-4">
                <IoChevronBack />
                <h2 className="font-light uppercase text-sm tracking-wide">{heading}</h2>
                <IoIosSearch />
            </div>
        </>
    )
}