
import './CoursesComponent.css'
import {coursesArray} from "../../data.ts";
import { CourseComponent } from '../CourseComponent/CourseComponent.tsx';

export const CoursesComponent = () => {
    return(
        <div>
            {
                coursesArray.map((course, index) => <CourseComponent item={course} key={index}>
                    {course.modules.map(module => <li key={module}>{module}</li>)}
                    </CourseComponent>)
            }
        </div>
    )
}
