import Navbar from "./_comp/Navbar";
import Hero from "./_comp/Hero";
import TimeLine from "./_comp/TimeLine";
import { MaskContainer } from "./components/ui/svg-mask-effect";
export default function Home() {
  return (
    <main className="h-[200vh] w-full bg-black">
      <Hero/>
      <TimeLine/>
      <MaskContainer className="text-lime-800 h-[80vh] overflow-visible border-b-2 border-purple-700" revealText="This is the reveal text" revealSize={600} size={5} children="this is the comtent this is the comtent this is the comtent"/>
      <MaskContainer className="text-lime-800 h-[80vh] overflow-visible border-b-2 border-purple-700" revealText="This is the reveal text" revealSize={600} size={5} children="this is the comtent this is the comtent this is the comtent"/>
      <MaskContainer className="text-lime-800 h-[80vh] overflow-visible border-b-2 border-purple-700" revealText="This is the reveal text" revealSize={600} size={5} children="this is the comtent this is the comtent this is the comtent"/>
      <div className="bg-orange-500 h-[100vh]"></div>
      <div className="fixed w-full m-auto bottom-0">
        <Navbar/>
      </div>
    </main>
  );
}
   