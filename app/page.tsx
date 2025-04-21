export default function Home() {
  return (
    <div className="flex flex-col my-auto gap-4">
      <h1 className="text-3xl font-bold text-center underline">Hello World!</h1>
      <p className="text-center">Written by</p>
      <p className="text-center">@taesung_yoon</p>
      <p className="text-center">Screenplay based on</p>
      <p className="text-center">
        <a
          className="underline"
          href="https://smart-fontina-1ff.notion.site/TAESUNG-YOON-0620dd5524cc43cb8d250b14f4cb919f"
        >
          [resume-korean]
        </a>
        <span className="mx-2">&</span>
        <a
          className="underline"
          href="https://file.notion.so/f/f/13bfc9e2-a811-430a-a0de-ada030eca6e6/6e561283-883b-44e3-9d0e-d528a43be320/Taesung_Yoon___Resume.pdf?table=block&id=1d134bc8-94cf-8099-959b-faedc7a52ffe&spaceId=13bfc9e2-a811-430a-a0de-ada030eca6e6&expirationTimestamp=1744725600000&signature=aH9mIkVI_mfptFoiQnXRpEIrQp0lZBJgtHSbVcnakzw&downloadName=TaesungYoon+_+PDF.pdf"
        >
          [resume-english]
        </a>
        <br />
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
