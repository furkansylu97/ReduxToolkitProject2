import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/CourseSlice";

function CourseList() {
  const dispatch = useDispatch();

  const { courses } = useSelector(({ form, courses: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      courses: filteredCourses,
    };
  });

  const renderedCourse = courses.map((course) => {
    return (
      <div key={course.id} className="panel">
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.cost}</p>
        <button
          className="button is-danger"
          onClick={() => {
            dispatch(removeCourse(course.id));
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <>
      <div className="courseList">{renderedCourse}</div>
    </>
  );
}

export default CourseList;
