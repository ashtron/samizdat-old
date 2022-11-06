import React from 'react';
import 'bulma/css/bulma.min.css';

function BookForm() {
  return (
    <>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input className="input" type="text" />
        </div>
      </div>

      <div className="field">
        <label className="label">Author</label>
        <div className="control">
          <input className="input" type="text" />
        </div>
      </div>

      <div className="field">
        <label className="label">Date</label>
        <div className="control">
          <input className="input" type="text" />
        </div>
      </div>
    </>
  );
}

export default BookForm;