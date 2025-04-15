import "./../script.css";

export default function About() {
  return (
    <div className="flex flex-col px-5 my-auto">
      <p className="scene-heading">INT. PORTFOLIO ABOUT PAGE - DAY</p>
      <p className="action">A tired developer types away at his keyboard.</p>
      <p className="character">TAESUNG</p>
      <p className="dialogue">
        Received Bachelor's at Boston University in 2024
        <br />
        Majored in Computer Science
      </p>
      <p className="character">Current hobbies & interests</p>
      <ul className="dialogue">
        <li>Photography</li>
        <li>Arch Linux</li>
        <li>Front-end web development</li>
      </ul>
      <p className="character">Technical skills:</p>
      <ul className="dialogue-list">
        <li>
          <strong>Languages</strong>
          <ul>
            <li>JavaScript / TypeScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>SQL</li>
            <li>C</li>
            <li>HTML / CSS</li>
          </ul>
        </li>
        <li>
          <strong>Frameworks / Libraries</strong>
          <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Angular.js</li>
            <li>Node.js</li>
            <li>Flask</li>
            <li>Tailwind CSS</li>
            <li>Chart.js</li>
            <li>Matplotlib</li>
            <li>Scikit-learn</li>
          </ul>
        </li>
        <li>
          <strong>Tools / Platforms</strong>
          <ul>
            <li>Linux (Arch, Hyprland)</li>
            <li>Git</li>
            <li>Docker</li>
            <li>Firebase</li>
            <li>AWS (Lambda, DynamoDB, S3)</li>
            <li>MongoDB</li>
            <li>Apache Flink</li>
            <li>Travis CI</li>
            <li>Postman</li>
          </ul>
        </li>
        <li>
          <strong>Other</strong>
          <ul>
            <li>UI/UX Design</li>
            <li>Stream Processing (Flink)</li>
            <li>Data Analysis / Visualization</li>
            <li>CI/CD Pipelines</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
