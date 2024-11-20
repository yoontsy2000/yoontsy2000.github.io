export default function NavMenu() {
  return (
    <nav className="md:w-1/2 mx-auto z-2">
      <div className="container mx-auto flex justify-between items-center p-4 border-b-4">
        <a href="#" className="font-bold text-2xl">
          <span>taesung</span>
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
