import FourthPage from "./_comp/FourthPage";
import Navbar from "./_comp/Navbar";
import SecondPage from "./_comp/SecondPage";
import ThirdPage from "./_comp/ThirdPage";
// import GlobeDemo from "./comp/Globe";
import Mashrume from "./comp/Mashrume";
export default function Home() {
  return (
    <main className="h-[200vh] w-full bg-[#d9d9dc]">

      <div className="min-h-[100vh] w-full">
        <div className="absolute left-6 top-[20vh] font-extralight text-8xl text-slate-800">Hi! I'm</div>
        <div className="absolute left-6 top-[33vh] font-extrabold text-slate-800 text-7xl font-serif">Aakash Saini</div>
        <Mashrume/>
      </div>

      <div className="second bg-[#d9d9dc]">
        <SecondPage/>
      </div>

      <div className="third">
        <ThirdPage/>
      </div>

      {/* <div className="fout">
        <FourthPage/>
      </div> */}

      <div className="fixed w-full m-auto bottom-0">
        <Navbar/>
      </div>

    </main>
  );
}
   