import Image from "next/image"
import profile from "../assets/profile.png"
const SecondPage = () => {
  return (
    <div className="w-full h-[100vh] flex">
      <div className="left h-full w-[60%] flex flex-col justify-center gap-3">
        <div className="px-24 font-extralight text-8xl text-slate-800">Hi! I'm</div>
        <div className="px-24 font-bold text-slate-800 text-8xl font-serif">Aakash Saini</div>
        <hr className="mx-24 h-0 border border-black w-72"/>
        <p className="font-medium text-slate-600 text-base px-24">I'm a pasonite Full Stack developer with a good knowledge of web3. I'm a pasonite Full Stack developer with a good knowledge of web3. I'm a pasonite Full Stack developer with a good knowledge of web3.</p>
      </div>

      <div className="right w-[40%] h-[90vh]">
      <Image src={profile} alt="not found" className="h-[90vh]"></Image>
      </div>
    </div>
  )
}

export default SecondPage
