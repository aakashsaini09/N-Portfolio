import Navbar from "./_comp/Navbar";
import Hero from "./_comp/Hero";
import TimeLine from "./_comp/TimeLine";
export default function Home() {
  return (
    <main className="h-[200vh] w-full bg-black">
      <Hero/>
      <TimeLine/>
      <div className="fixed w-full m-auto bottom-0">
        <Navbar/>
      </div>

    </main>
  );
}
   