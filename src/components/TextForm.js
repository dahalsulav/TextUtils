import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleLpClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const handleClClick = ()=>{
    setText("");
  }
  const handleCpClick =  ()=>{
    let text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
  }
  const handleRmClick = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  let totalWords = text.split(" ").length;
  let totalChars = text.length;
  let timeToRead = 0.008*(text.split(" ").length);

  return (
    <>
      <div clasName="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
          <button className="btn btn-success m-2" onClick={handleUpClick}>UpperCase</button>
          <button className="btn btn-success m-2" onClick={handleLpClick}>LowerCase</button>
          <button className="btn btn-success m-2" onClick={handleRmClick}>Remove Extra Space</button>
          <button className="btn btn-success m-2" onClick={handleCpClick}>Copy Text</button>
          <button className="btn btn-success m-2" onClick={handleClClick}>Clear Text</button>
        </div>
      </div>
      <div className="container">
        <h1>Text Summary</h1>
        <p>
          Words = {totalWords}
          <br />
          Character = {totalChars} <br/>
          Time to read: {timeToRead} Minutes
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>

  );
}
