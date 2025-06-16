import React from "react";
import { useSelector } from "react-redux";

function CourseValue() {
  const totalCost = useSelector(({ form, courses: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    let cost = 0;

    for (let course of filteredCourses) {
      cost += course.cost
    }

    return cost;

  });

  return <div>Total Cost: {totalCost} ₺</div>;
}

export default CourseValue;
