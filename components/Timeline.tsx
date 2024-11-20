import TimelineItem from "@/components/TimelineItem"

export default function Timeline() {
  return (
    <section className="px-6 pt-[60px]">
        <h2 className="p-16 text-5xl font-bold">timeline</h2>
        {timeline.map((item) => (
          <TimelineItem title={item.title} time={item.time}/>
        ))}
    </section>
  )
}

const timeline = [
  {
    title: "Graduated with a Bachelor's in Computer Science",
    time: "May 2024",
  },
  {
    title: "Resumed Studies at Boston University",
    time: "Sep 2023 - May 2024",
  },
  {
    title: "Military Service",
    time: "Jan 2022 - July 2023",
  },
  {
    title: "Internship at Boston University: Software and Applications Lab",
    time: "May 2021 - Aug 2021",
  },
  {
    title: "Boston University: Spark!",
    time: "Sep 2020 - Dec 2020",
  },
  {
    title: "Internship at SuperTree",
    time: "May 2020 - Aug 2020",
  },
];