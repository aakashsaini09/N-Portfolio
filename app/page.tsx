import Navbar from "./_comp/Navbar";
import Hero from "./_comp/Hero";
import { HoverEffect } from "./components/ui/card-hover-effect";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import ScrollBasedVelocityDemo from "./components/scrollToMoveTxt";
import WobbleCard  from "./components/WobbleCard";
import Skills from "./_comp/Skills";
import End from "./_comp/End";
import Footer from "./_comp/Footer";
import { Timeline } from "./components/ui/timeline";
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
  
  const timelineData = [
    {
      title: "2021-2024",
      content: (
        <div>
          <h3 className="font-bold text-3xl pt-3 pb-1">Completed my Bachelor's Degree (BCA)</h3>
          <p className="text-slate-400 pt-3 pb-1">I have done my Bachelor's in Computer Degree from Govt College Jind, Haryana. During that time I have </p>
          <p className="pb-4 text-slate-400">
          ✅ Card grid component <br />
          ✅ Startup template Aceternity <br />
          ✅ Random file upload lol <br />
</p>
          {/* <div className="w-72 h-52 flex justify-center items-center overflow-hidden"> */}
            <img className="" src="/bca.jpg" alt="Project Image" />
          {/* </div> */}
          {/* <img src="/b1.png" alt="Project Image" />
          <img src="/b5.webp" alt="Project Image" /> */}
        </div>
      ),
    },
    {
      title: "During 2023",
      content: (
        <div>
          <h3 className="font-bold text-5xl pt-3 pb-1 font-sans text-white">Done My first Internship</h3>
          <p className="text-slate-500 pt-1 pb-7">I have done my Bachelor's in Computer Degree from Govt College Jind, Haryana. During that time I have Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dicta eum unde eveniet enim corrupti voluptate natus nisi animi illo velit odit fugit excepturi soluta nesciunt maiores laborum at iste eaque sequi est ipsum quisquam quod esse. Neque, quae consequatur.</p>
          <div className="w-full flex justify-center items-center">
            <img src="/internship.jpg" alt="Project Image" />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <h3 className="font-bold text-3xl py-3">This is a project that I have been working on.</h3>
          <img src="/ib.jpg" alt="Project Image" />
        </div>
      ),
    },
    {
      title: "2024 End",
      content: (
        <div>
          <h3 className="font-bold text-3xl py-3">This is a project that I have been working on.</h3>
          <img src="/ib.jpg" alt="Project Image" />
        </div>
      ),
    },
  ];
  // https://drive.google.com/file/d/1EMl1e9Cc2498J7h4PyLkmLb5Gbrph3fP/view?usp=sharing
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
        <HoverBorderGradient url="https://drive.google.com/file/d/1EMl1e9Cc2498J7h4PyLkmLb5Gbrph3fP/view?usp=sharing" clockwise={true} duration={1} children={"Download Resume"} />
      </div>

      <div className="px-16 md:px-28 bg-[#131425] py-20 pb-56">
        <WobbleCard/>
      </div>
      {/* skill icons */}
      <Skills/>
      {/* Project Section */}
      <div id="projects" className="px-0 md:px-28 gap-1 min-h-[50vh] bg-[#131425]">
        <div className="projects min-h-36 w-full bg-gray-800 ">
          <h2 className="relative ml-0 md:ml-10 top-1 md:top-16 text-white font-bold font-sans text-9xl">Projects</h2>
        </div>
        <HoverEffect items={content}/>
      </div>

<div className="py-16 bg-[#131425]">
    <Timeline data={timelineData}/>
</div>
<End/>
<div className="w-full min-h-20 flex justify-center items-center py-12 bg-[#131425]">
    <HoverBorderGradient url="https://www.linkedin.com/in/-aakashsaini/" className="text-base" clockwise={true} duration={0.5} children={"Let's get in touch"} />
</div>

     <Footer/>
      <div className="fixed w-full m-auto bottom-0 z-50">
        <Navbar/>
      </div>
    </main>
  );
}
   