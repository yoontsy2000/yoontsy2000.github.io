interface TimeLineItemProps {
  title: string,
  content?: string,
  time: string
}

export default function TimelineItem({title, content, time}: TimeLineItemProps) {
  return (
    <div className="flex flex-col px-16 mt-2">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-2xl font-semibold">{time}</p>
      </div>
      <p className="w-1/2 font-light mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
    </div>
  )
}