import React from "react";

function CourseForm() {
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
