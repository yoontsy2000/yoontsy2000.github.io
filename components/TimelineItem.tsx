import { ReactNode } from "react";

type TimelineItemProps = {
    date: string;
    children: ReactNode;
};

export default function TimelineItem({date, children}: TimelineItemProps) {
    return (
        <div className="flex space-x-2">
            <p>{date}</p> <p>{children}</p>
        </div>
    )
}