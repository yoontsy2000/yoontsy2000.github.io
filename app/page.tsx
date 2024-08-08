export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="">
        <nav className="absolute">
          <ul className="mx-auto flex">
            <li>About</li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
        </nav>
        <div className="text-center">
          <p className="text-5xl">TAESUNG/YOON</p>
          <p className="text-xl">Software Engineer</p>
        </div>
      </div>
    </main>
  );
}
