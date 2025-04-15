import "./../script.css";

export default function Projects() {
  return (
    <div className="flex flex-col px-5 my-auto">
      <p className="scene-heading">INT. PORTFOLIO PROJECTS PAGE - DAY</p>
      <p className="action">A tired developer types away at his keyboard.</p>
      <p className="character">[ONGOING] PROJECT: geotagger</p>
      <ul className="dialogue">
        <li>
          React web app to easily geotag JPEGs from older DSLR cameras without a
          GPS module.
        </li>
        <li>
          Supports drag-and-drop image upload integrated with AWS S3 Bucket.
        </li>
      </ul>
      <p className="character">[ONGOING] PROJECT: custom eww widgets</p>
      <ul className="dialogue">
        <li>
          Small hobby project for ricing Hyprland desktop environment running on
          Arch Linux
        </li>
        <li>Planning to create Spotify widget using ElKowars wacky widgets</li>
      </ul>
    </div>
  );
}
