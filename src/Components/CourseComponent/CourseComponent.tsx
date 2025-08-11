import './CourseComponent.css'
import type {ICourse} from "../../Models/ICourse.ts";
import type {ReactNode} from "react";

interface CourseComponentProps {
    item: ICourse
    children:ReactNode
}

export const CourseComponent = ({item,children}: CourseComponentProps) => {
    return(
        <div className="course-container">
            <h2 className='text-gray-800'>{item.title}</h2>
            <p>
                MonthDuration: {item.monthDuration}
            </p>
            <p>
                HourDuration: {item.hourDuration}
            </p>
            <ol>
                Modules: {children}
            </ol>
        </div>
    )

}