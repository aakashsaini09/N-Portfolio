import Navbar from "./_comp/Navbar";
import Hero from "./_comp/Hero";
import TimeLine from "./_comp/TimeLine";
import { HoverEffect } from "./components/ui/card-hover-effect";
import image from "./assets/frontend.png"
import Image from "next/image";
export default function Home() {
  const content= [
    {
      title: "Node-JS",
      description: "",
      link: "https://www.google.com"
    },
    {
      title: "React-JS",
      description: "",
      link: "https://www.google.com"
    },
    {
      title: "MongoDB",
      description: "",
      link: "https://www.google.com"
    },
    {
      title: "study",
      description: "",
      link: "https://www.google.com"
    },
    {
      title: "study",
      description: "",
      link: "https://www.google.com"
    },
    {
      title: "study",
      description: "",
      link: "https://www.google.com"
    },
    
    
  ]
  return (
    <main className="h-[200vh] w-full bg-black">
      <Hero/>
      <TimeLine/>
      <div className="bg-gray-950 px-20 gap-6">
        <HoverEffect items={content}/>
      </div>


     <div className="bg-gray-950 h-[100vh]"></div>

      <div className="fixed w-full m-auto bottom-0 z-50">
        <Navbar/>
      </div>
    </main>
  );
}
   