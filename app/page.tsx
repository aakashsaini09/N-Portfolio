import Navbar from "./_comp/Navbar";
import Hero from "./_comp/Hero";
import { HoverEffect } from "./components/ui/card-hover-effect";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import ScrollBasedVelocityDemo from "./components/scrollToMoveTxt";
import WobbleCard  from "./components/WobbleCard";
export default function Home() {
  const content= [
    {
      title: "QuillVibes",
      description: "Write or generate blogs with AI assistance and publish them.",
      link: "https://quill-vibes.vercel.app/",
      img: '/ib.jpg'
    },
    {
      title: "Github Profile",
      description: "Search and View github Profile in a clean and intuitive UI",
      link: "https://github-profile-aakashsaini09.netlify.app/",
      img: '/github.png'
    },
    {
      title: "Cryoto Tracker",
      description: "Crypto tracking application that offers prices updates & one-year data trends.",
      link: "https://coinmonster.netlify.app/",
      img: '/coin.png'
    },
    {
      title: "ToolsHub",
      description: "Get access of multiple usefull tools at one place for free.",
      link: "https://mini-tool.netlify.app/",
      img: '/toolshub.png'
    },
    {
      title: "CodeCollab",
      description: "Write code with your friends in real-time. Work on same Project Together.",
      link: "https://github.com/aakashsaini09/CodeCollab",
      img: '/codeing.png'
    },
  ]
  return (
    <main className="h-[200vh] w-full bg-[#131425]">
      <Hero/>
      {/* ScrollMoveText */}
      <div className="w-full px-16 md:px-28 gap-6">
        <ScrollBasedVelocityDemo/>
        <ScrollBasedVelocityDemo/>
      </div>


      {/* Resume Download button */}
      <div className="w-full min-h-20 flex justify-center items-center my-12">
        <HoverBorderGradient clockwise={true} duration={1} children={"Download Resume"} />
      </div>

      <div className="px-16 md:px-28 bg-[#131425] py-20 pb-56">
        <WobbleCard/>
      </div>
      {/* Project Section */}
      <div className="px-16 md:px-28 gap-6 min-h-[50vh] bg-[#131425]">
        <div className="projects min-h-36 w-full bg-gray-800">
          <h2 className="relative ml-10 top-16 text-white font-bold font-sans text-9xl">Projects</h2>
        </div>
        <HoverEffect items={content}/>
      </div>


     <div className="bg-gray-950 h-[100vh]"></div>

      <div className="fixed w-full m-auto bottom-0 z-50">
        <Navbar/>
      </div>
    </main>
  );
}
   