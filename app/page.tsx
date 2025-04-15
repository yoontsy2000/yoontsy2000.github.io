export default function Home() {
  return (
    <div className="flex flex-col my-auto gap-4">
      <h1 className="text-3xl font-bold text-center underline">Hello World!</h1>
      <p className="text-center">Written by</p>
      <p className="text-center">@taesung_yoon</p>
      <p className="text-center">Screenplay based on</p>
      <p className="text-center">
        <a className="underline" href="https://nextjs.org/">
          next.js
        </a>
        <span className="mx-2">&</span>
        <a className="underline" href="https://tailwindcss.com/">
          tailwindcss
        </a>
      </p>
    </div>
  );
}
