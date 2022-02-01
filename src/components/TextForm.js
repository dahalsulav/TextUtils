import React, {useState} from 'react';

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  
  return (
<div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
</div>
  );
}
