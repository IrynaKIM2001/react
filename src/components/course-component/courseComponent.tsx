import './courseComponent.css'
import type {FC} from "react";
import type {Icourse} from "../../models/courseModel.ts";

type PropsType={
    course: Icourse
}

export const CourseComponent: FC<PropsType> = ({course}) => {
    return (
        <li>
            {course.title} - {course.monthDuration}
        </li>
    )
}