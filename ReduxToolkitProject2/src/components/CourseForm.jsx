import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeDescription, changeCost } from "../store/slices/FormSlice";
import { addCourse } from "../store/slices/CourseSlice";

function CourseForm() {
  const name = useSelector((state) => state.form.name);
  const description = useSelector((state) => state.form.description);
  const cost = useSelector((state) => state.form.cost);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from being updated when the form is submitted
    dispatch(addCourse({ name, description, cost }))
  }

  return (
    <div className="courseFormWrapper panel">
      <h4 className="subtitle is-4">Add Course</h4>
      <form onSubmit={ handleSubmit }>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                onChange={(event) => {
                  dispatch(changeName(event.target.value));
                }}
                value={name}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                rows={1}
                onChange={(event) => {
                  dispatch(changeDescription(event.target.value));
                }}
                value={description}
              ></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                className="input is-expanded"
                type="number"
                onChange={(event) => {
                  dispatch(changeCost(parseInt(event.target.value)));
                }}
                value={cost}
              />
            </div>
          </div>
        </div>
        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
