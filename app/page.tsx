import Navbar from "./_comp/Navbar";
import Hero from "./_comp/Hero";
import TimeLine from "./_comp/TimeLine";
import { HoverEffect } from "./components/ui/card-hover-effect";
export default function Home() {
  const content= [
    {
      title: "study",
      description: "I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer",
      link: "https://www.google.com"
    },
    {
      title: "study",
      description: "I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer",
      link: "https://www.google.com"
    },
    {
      title: "study",
      description: "I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer",
      link: "https://www.google.com"
    },
    {
      title: "study",
      description: "I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer",
      link: "https://www.google.com"
    },
    {
      title: "study",
      description: "I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer",
      link: "https://www.google.com"
    },
    {
      title: "study",
      description: "I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer I'm a pasonite Full Stack developer",
      link: "https://www.google.com"
    },
    
    
  ]
  return (
    <main className="h-[200vh] w-full bg-black">
      <Hero/>
      <TimeLine/>
      <HoverEffect items={content}/>
     <div className="bg-orange-500 h-[100vh]"></div>
      <div className="fixed w-full m-auto bottom-0">
        <Navbar/>
      </div>
    </main>
  );
}
   