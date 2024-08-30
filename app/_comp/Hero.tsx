import Image from "next/image"
import '../assets/style.css'
import { FlipWords } from "../components/ui/flip-words"
import mainlogo from '../assets/download.png'
const Hero = () => {
  const words = ["developer", "designer"]
  return (
    <div className="max-w-[100vw] min-h-[100vh] flex flex-col md:flex-row">
      <div className="left order-2 md:order-1 min-h-auto md:min-h-[100vh] w-[100%] md:w-[60%] flex flex-col justify-center gap-1">
        <div className="px-10 md:px-24 font-extralight text-4xl md:text-8xl text-white">Hi! I'm</div>
        <div className="px-10 md:px-24 font-bold text-white text-8xl font-mono">Aakash Saini</div>
        <div className="text-white font-bold text-4xl relative pl-10 md:px-24 max-w-[100vw] overflow-hidden">
          I'm a web <FlipWords words={words} className="text-purple-600"/>
        </div>
        <p className="font-medium text-slate-500 text-base px-10 md:px-24 pt-3">I'm a pasonite Full Stack developer with a good knowledge of web3. I'm a pasonite Full Stack developer with a good knowledge of web3. I'm a pasonite Full Stack developer with a good knowledge of web3.</p>
      </div>

      <div className="right order-1 md:order-2 overflow-hidden w-[100%] md:w-[40%] h-[70vh] md:h-[90vh] flex justify-center items-center">
        <Image className="mx-auto relative md:static left-24 " src={mainlogo} alt="Image" width={600} height={600}></Image>
      </div>
    </div>
  )
}

export default Hero
