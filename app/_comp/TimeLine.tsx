import Image from "next/image"
import forntend from "../assets/frontend.png"
import { LampDemo } from "../components/ui/lamp"
import { StickyScroll } from "../components/ui/sticky-scroll-reveal"
import image from "../assets/frontend.png"
const TimeLine = () => {
  const content = [
    {
    "title": "study",
    "description": "I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer",
    "content": <Image src={image} alt="frontend" width="500" height="500"/>
},
    {
    "title": "study",
    "description": "I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer",
    "content": <Image src={image} alt="frontend" width="500" height="500"/>
},
    {
    "title": "study",
    "description": "I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer",
    "content": <Image src={image} alt="frontend" width="500" height="500"/>
},
    {
    "title": "study",
    "description": "I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer",
    "content": <Image src={image} alt="frontend" width="500" height="500"/>
},
    {
    "title": "study",
    "description": "I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer",
    "content": <Image src={image} alt="frontend" width="500" height="500"/>
},
    {
    "title": "study",
    "description": "I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer",
    "content": <Image src={image} alt="frontend" width="500" height="500"/>
},
]
  return (
    <>
    <div className="bg-slate-800 w-full h-auto flex items-center flex-col">
      <LampDemo/>
      <div className="w-full bg-slate-950 flex justify-center items-center">
        <div className="w-[80vw] flex justify-center items-center border-2 border-purple-500 h-auto">
          <StickyScroll content={content}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default TimeLine
