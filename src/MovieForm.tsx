import React from 'react';
import 'bulma/css/bulma.min.css';

function MovieForm() {
  return (
    <>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input className="input" type="text" />
        </div>
      </div>

      <div className="field">
        <label className="label">Rating</label>
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

export default MovieForm;