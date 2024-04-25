import Image from "next/image"
import Logo from "@/app/logo.svg"
export function LogoCard() {
  return (
    <>
      <div className="flex flex-col md:w-2/5 justify-center items-center md:items-start ">
        <Image src={Logo} width={320} alt="logo" />
        <h2 className="scroll-m-20 pb-2 text-xl tracking-tight pl-8 px text-black text-center md:text-left">
          Facebook helps you connect and share with the people in your life.
        </h2>
      </div>
    </>
  )
}
