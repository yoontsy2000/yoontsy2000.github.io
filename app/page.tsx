import NavMenu from "@/components/NavMenu";
import BioSection from "@/components/BioSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <NavMenu/>
      </header>
      <main className="w-1/2 mx-auto">
        <section className="py-16 mx-auto">
          {/* <img src="https://picsum.photos/200/300/" alt="profile" width={100} height={100}/> */}
          <div className="text-center">
            <h1 className="text-2xl">Taesung Yoon | 윤태성</h1>
            <p>LinkedIn | Github</p>
          </div>
        </section>
        <BioSection/>
        <section className="container">
          <h2 className="font-semibold mx-auto">Timeline</h2>
          <p>2018 - Attended Boston University</p>
          <p>2019 - Won 2nd Place in HackNY 2019</p>
          <p></p>
        </section>
        <p>Contact me</p>
      </main>
    </div>
  );
}
