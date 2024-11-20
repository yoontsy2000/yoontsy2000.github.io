import NavMenu from "@/components/NavMenu";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavMenu />
      <section className="mx-auto px-6 pt-[120px]">
        <h1 className="p-16 text-5xl font-bold ">hi, i am taesung!</h1>
        <div className="grid grid-cols-2">
          <div>
            <h2 className="p-16 text-5xl font-bold ">about me!</h2>
            <p className="px-16 text-2xl font-semibold">
              Hi, I’m a software engineer passionate about creating seamless and accessible user experiences. With a background in Computer Science from Boston University and experience in front-end development, I combine technical expertise with a focus on human-centered design. I thrive at the intersection of code and creativity, building solutions that empower users.
            </p>
          </div>
          <div>
          <h2 className="p-16 text-5xl font-bold ">my interests!</h2>
            <p className="px-16 text-2xl font-semibold">
              <ul>
                <li>🖥️ frontend engineering</li>
                <li>🧑‍💻 human-computer interaction</li>
                <li>📷 photography</li>
                <li>🎥 films</li>
                <li>📚 books</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
      <Timeline/>
      <section className="px-6 pt-[60px]">
        <h2 className="p-16 text-5xl font-bold">current and past projects</h2>
        <div className="flex justify-between">
          <p className="px-16 text-2xl font-semibold">Portfolio Website</p>
          <p className="px-16 text-2xl font-semibold">2024 - Current</p>
        </div>
        <div className="flex justify-between">
          <p className="px-16 text-2xl font-semibold">WhyPhi (Application Tracking System)</p>
          <p className="px-16 text-2xl font-semibold">2020 - 2024</p>
        </div>

        <div className="flex justify-between">
          <p className="px-16 text-2xl font-semibold">Smart Placement Operator</p>
          <p className="px-16 text-2xl font-semibold">2024</p>
        </div>

        <div className="flex justify-between">
          <p className="px-16 text-2xl font-semibold">HackNYU Winner: Down 2 Dine</p>
          <p className="px-16 text-2xl font-semibold">2019</p>
        </div>

      </section>
      <div className="mx-auto">
      </div>
    </div>
  );
}
