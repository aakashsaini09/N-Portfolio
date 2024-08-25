import Navbar from "./_comp/Navbar";
import Hero from "./_comp/Hero";
import TimeLine from "./_comp/TimeLine";
import { HoverEffect } from "./components/ui/card-hover-effect";
import image from "./assets/frontend.png"
import Image from "./image.svg";
export default function Home() {
  const linkof: string = '/assets/frontend.png'
  const content= [
    {
      title: "Tools-Hub",
      description: "Get access to many useful tools at one place for free.",
      link: "https://www.google.com/fkds",
      img: '/frontend.png'
    },
    {
      title: "QuillVibes",
      description: "Users can write and publish their own blogs or generate content with AI assistance. The scalable, open- source web app includes multiple features.",
      link: "https://www.google/gj.com",
      img: '/github.png'
    },
    {
      title: "MongoDB",
      description: "this is and op website",
      link: "https://www.google/rssg.com",
      img: '/coin.png'
    },
    {
      title: "study",
      description: "",
      link: "https://www.google/rws.com",
      img: '/frontend.png'
    },
    {
      title: "study",
      description: "",
      link: "https://www.google/fef.com",
      img: '/frontend.png'
    },
    {
      title: "study",
      description: "",
      link: "https://www.google/fds.com",
      img: '/frontend.png'
    },
    {
      title: "study",
      description: "",
      link: "https://www.google/rew.com",
      img: '/frontend.png'
    },
    {
      title: "study",
      description: "",
      link: "https://www.google/news/.com",
      img: '/frontend.png'
    },
    {
      title: "study",
      description: "",
      link: "https://www.google/images.com",
      img: '/frontend.png'
    },
    
    
  ]
  return (
    <main className="h-[200vh] w-full bg-black">
      <Hero/>
      <TimeLine/>
      <div className=" px-28 gap-6 min-h-[50vh] bg-gray-950">
        <HoverEffect items={content}/>
      </div>


     <div className="bg-gray-950 h-[100vh]"></div>

      <div className="fixed w-full m-auto bottom-0 z-50">
        <Navbar/>
      </div>
    </main>
  );
}
   