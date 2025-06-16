import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/CourseSlice";

function CourseList() {
  const courses = useSelector((state) => {
    return state.courses.data;
  });

  const renderedCourse = courses.map((course) => {
    return (
      <div key={course.id} className="panel">
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.cost}</p>
        <button className="button is-danger" onClick={() => {
          dispatch(removeCourse(course.id))
        }}>Delete</button>
      </div>
    );
  });

  const dispatch = useDispatch();

  return (
    <>
      <div className="courseList">
        {renderedCourse}
      </div>
    </>
  );
}

export default CourseList;
