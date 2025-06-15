import React from "react";
import { useSelector } from 'react-redux';

function CourseForm() {

/* const {name, description, cost} = useSelector((state) => {
  return {
    name: state.form.name,
    description: state.form.description,
    cost: state.form.cost,
  }
})
*/
const name = useSelector((state) => state.form.name);
const description = useSelector((state) => state.form.description);
const cost = useSelector((state) => state.form.cost);

console.log(name, description, cost);

  return (
    <div className="courseFormWrapper panel">
      <h4 className="subtitle is-4">Add Course</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea className="textarea" rows={1}></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input className="input is-expanded" type="number" />
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
