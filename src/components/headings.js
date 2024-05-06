//Giving headings different props with it, so that I can use the same component several times but changing out the title, classname
export default function Headings({ heading, className }) {

    return (
        <div className="flex justify-between my-5">
            <h1 className={`${className} text-transparent bg-clip-text bg-gradientPrimary font-extrabold text-4xl capitalize`}>{heading}</h1>
        </div>
    )
}
