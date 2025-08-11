import './coursesComponent.css'
import {coursesAndDurationArray} from "../../../arrays-2.ts";
import type {Icourse} from "../../models/courseModel.ts";
import {CourseComponent} from "../course-component/courseComponent.tsx";


export const CoursesComponent = () => {
    return(
        <ul>{
            coursesAndDurationArray.map((course:Icourse,index:number) =>{
                return <CourseComponent course={course} key={index}/>
            })
        }
        </ul>
    )
}