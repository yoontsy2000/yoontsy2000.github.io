// import TimelineItem from "@/components/TimelineItem"

export default function Timeline() {
  return (
    <ul className="">
      {
        timeline.map((item) => (
          <li key={item.time} className="flex even:flex-row-reverse odd:justify-start">
            <p>{item.content}</p>
          </li>
        ))
      }
    </ul>
  )
}

const timeline = [
  {
    time: '2018',
    title: 'Attended Boston University',
    content: 'Lorem Ipsum'
  },
  {
    time: '2019',
    title: 'Won HackNYU Competition',
    content: 'Won HackNYU Competition'
  }
]