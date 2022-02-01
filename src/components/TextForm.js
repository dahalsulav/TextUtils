import React from 'react';

export default function TextForm(props) {
  return (
<div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className='form-control' id="myBox" rows="5"></textarea>
        <button className="btn btn-primary">Convert to UpperCase</button>
    </div>
</div>
  );
}
