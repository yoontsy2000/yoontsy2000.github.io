import TimelineItem from "@/components/TimelineItem"

export default function Timeline() {
  return (
    <ul className="">
      <li className="flex even:justify-end odd:justify-start">
        <TimelineItem date="05-2018">
          Attended Boston University
        </TimelineItem>
      </li>
      <li className="flex even:justify-end odd:justify-start">  
        <TimelineItem date="02-2019">
          Won 2nd Place in HackNYU
        </TimelineItem>
      </li>
    </ul>
  )
}