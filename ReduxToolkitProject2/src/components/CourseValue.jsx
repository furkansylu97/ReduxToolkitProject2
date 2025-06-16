import React from "react";
import { useSelector } from "react-redux";

function CourseValue() {
  const totalCost = useSelector(({ form, courses: { data, searchTerm } }) => data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).reduce((acc, course) => acc+course.cost,0)
  );

  return <div className="costPrice">Total Cost: {totalCost} ₺</div>;
}

export default CourseValue;
