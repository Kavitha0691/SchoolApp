import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <>
      <Link href="/" className=" flex flex-row">
        <Image
          src="/mymedia.png"
          alt="mymedia Logo"
          width={40}
          height={40}
          className="w-16 h-auto"
        />
        <h1 className="text-center capitalize text-3xl font-semibold text-black">
          my media
        </h1>
      </Link>
    </>
  )
}

export default Logo