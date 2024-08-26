import Image from "next/image"
const Skills = () => {
  const tailwind = '/tailwind.svg'
  const next = '/nextjs.svg'
  const react = '/react.svg'
  const ts = '/ts.svg'
  const aws = '/aws.svg'
  return (
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
