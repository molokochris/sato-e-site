import Image from "next/image"
import testItems from "/src/components/TestItems"

export default function Home() {
    
/*    const slideImages = [
        {id:0,src:"/img/header.webp"},
        {id:1,src:"/img/header.webp"},
        {id:1,src:"/img/header.webp"},

    ]*/

  return <main className="h-screen">
    <div className="flex flex-row px-6 items-center justify-between">
        <div className="">
            <Image
            src="/img/menu.png"
            width={24}
            height={24}
            alt="menu"
            />
        </div>
        <div className="">
        <Image src="/img/logo.png"
        width={50}
        height={50}
        alt="logo"
        />
        </div>
        <div className="rounded-full bg-black w-8 h-8">
        </div>
    </div>

    <div className="h-1/2 p-2 mb-6 bg-gray-500 bg-[url('/img/header.webp')] bg-center bg-no-repeat flex justify-center items-center flex-col">
        <span className="text-[whitesmoke] text-3xl font-[1000]">
            SPRING / SUMMER<br />
            2024 COLLECTION
        </span>
        <span className="text-md font-thinline text-[whitesmoke] text-center  px-16 py-2 mb-4">
            Find and easily buy your desired new season fit with us
        </span>
        <div className="flex justify-center items-center bg-white w-32 py-3 rounded-sm font-medium">
            Shop Now
        </div>
    </div>

    <div className=" p-6 mb-6 bg-gray-300 bg-[url('/img/banner.webp')] bg-cover bg-center flex flex-col">
        <span className="text-gray-900 font-medium text-lg mb-6">Gadgets Galore Sale</span>
        <span className="text-sm text-gray-800 mb-4">GET A 50% DISCOUNT ON<br />YOUR FIRST ORDER!</span>
        <span className="w-28 py-2 bg-black text-sm text-white rounded-sm flex justify-center items-center">Shop Now</span>
    </div>

    <div className="flex justify-between flex-row px-6 text-sm mb-4">
        <span className="font-bold">Recommended for you</span>
        <span className="font-thinline text-gray-400">View All</span>
    </div>

    <div className="h-1/3 pl-2 mb-6 flex flex-row justify-between overflow-x-auto">
        {testItems.map((image) => {
            return <Image
            className="mr-2 rounded-md w-300"
            key={image.id}
            src={image.src}
            alt="item-image"
            width={300}
            height={250}
            quality={100}
            />
        })}
    </div>

    <footer className="py-2 bg-black text-white font-normal text-sm text-center">
        By Moloko Chris Poopedi
    </footer>
  </main>;
}
