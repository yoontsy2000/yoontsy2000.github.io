export default function NavMenu() {
  return (
    <nav className="w-full fixed border-b-2 bg-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="font-bold text-2xl">
          <span>home</span>
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#">
              <span>works</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>projects</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>contact me</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
