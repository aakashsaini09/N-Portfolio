import Navbar from "./_comp/Navbar";
import Hero from "./_comp/Hero";
import TimeLine from "./_comp/TimeLine";
import { HoverEffect } from "./components/ui/card-hover-effect";
export default function Home() {
  const content= [
    {
      title: "QuillVibes",
      description: "Write or generate blogs with AI assistance and publish them.",
      link: "https://quill-vibes.vercel.app/",
      img: '/quillvibes.png'
    },
    {
      title: "Github Profile",
      description: "Search and View github Profile in a clean and intuitive UI",
      link: "https://github-profile-aakashsaini09.netlify.app/",
      img: '/github.png'
    },
    {
      title: "Coin",
      description: "Crypto tracking application that offers prices updates & one-year data trends.",
      link: "https://coinmonster.netlify.app/",
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
  ]
  return (
    <main className="h-[200vh] w-full bg-black">
      <Hero/>
      <TimeLine/>
      <div className=" px-28 gap-6 min-h-[50vh] bg-[#131425]">
        <HoverEffect items={content}/>
      </div>


     <div className="bg-gray-950 h-[100vh]"></div>

      <div className="fixed w-full m-auto bottom-0 z-50">
        <Navbar/>
      </div>
    </main>
  );
}
   