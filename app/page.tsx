import NavMenu from "@/components/NavMenu";
import BioSection from "@/components/BioSection";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-black p-7"/>
      <header>
          <NavMenu/>
      </header>
      <main className="w-1/2 mx-auto">
        <section className="py-16 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl">Taesung Yoon | 윤태성</h1>
          </div>
        </section>
        <BioSection/>
        
        <section className="container">
          <h2 className="font-semibold mx-auto">Timeline</h2>
          <Timeline/>
        </section>
        <p className="font-semibold">Contact me</p>
      </main>
      <div className="w-full fixed bottom-0 bg-black p-7 flex space-x-4">
        {/* <div className="bg-white p-5"/> */}
      </div>
    </div>
  );
}
