import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeDescription, changeCost  } from "../store/slices/FormSlice";

function CourseForm() {

const name = useSelector((state) => state.form.name);
const description = useSelector((state) => state.form.description);
const cost = useSelector((state) => state.form.cost);

const dispatch = useDispatch();

console.log(name, description, cost);

  return (
    <div className="courseFormWrapper panel">
      <h4 className="subtitle is-4">Add Course</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" onChange={(event) => { dispatch(changeName(event.target.value)) }} />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea className="textarea" rows={1} onChange={(event) => { dispatch(changeDescription(event.target.value)) }}></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input className="input is-expanded" type="number" onChange={(event) => { dispatch(changeCost(parseInt(event.target.value))) }} />
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
