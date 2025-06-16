import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store/slices/CourseSlice";

function CourseSearch() {
  const dispatch = useDispatch;
  const searchTerm = useSelector((state) => {
    return state.courses.searchTerm;
  });

  return (
    <div className="listHeader">
      <h3 className="title is-3">My Courses</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <div className="control">
          <input
            className="input"
            onChange={(event) => {
              dispatch(changeSearchTerm(event.target.value));
            }}
            value={searchTerm}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseSearch;
