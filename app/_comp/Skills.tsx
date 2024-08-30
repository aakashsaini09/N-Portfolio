"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
const Skills = () => {
  const tailwind = '/tailwind.svg'
  const next = '/nextjs.svg'
  const react = '/react.svg'
  const ts = '/ts.svg'
  const aws = '/aws.svg'
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile(); // Check initially on mount

    window.addEventListener('resize', checkMobile); // Check on window resize

    return () => window.removeEventListener('resize', checkMobile); // Cleanup
  }, []);
if(isMobile){
  return (
    <>
    <div className="cursor-pointer w-full min-h-[20vh] flex gap-5 justify-around px-6 items-center bg-[#131425] py-5 pb-10">
        <Image className="bg-white rounded-full p-2" src={next} alt="Tailwind-CSS" width={55} height={55}></Image>
        <Image className="cursor-pointer" src={ts} alt="Tailwind-CSS" width={55} height={55}></Image>
        <Image className="cursor-pointer" src={react} alt="Tailwind-CSS" width={55} height={55}></Image>
        <Image className="cursor-pointer" src={tailwind} alt="Tailwind-CSS" width={55} height={55}></Image>
        <Image src={aws} className="bg-white rounded-full p-2 cursor-pointer" alt="Tailwind-CSS" width={55} height={55}></Image>
      </div>
    </>
  )
}else return (
  <>
    <div className="cursor-pointer w-full min-h-[20vh] flex gap-10 justify-center items-center bg-[#131425] py-10 pb-32">
      <Image className="bg-white rounded-full p-2" src={next} alt="Tailwind-CSS" width={80} height={80}></Image>
      <Image className="cursor-pointer" src={ts} alt="Tailwind-CSS" width={80} height={80}></Image>
      <Image className="cursor-pointer" src={react} alt="Tailwind-CSS" width={80} height={80}></Image>
      <Image className="cursor-pointer" src={tailwind} alt="Tailwind-CSS" width={80} height={80}></Image>
      <Image src={aws} className="bg-white rounded-full p-2 cursor-pointer" alt="Tailwind-CSS" width={80} height={80}></Image>
    </div>
  </>
)
}

export default Skills
