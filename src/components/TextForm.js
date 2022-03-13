import React, {useState} from "react";
 

export default function TextForm(props) { 

    const [text, setText] = useState('')
// converts to uppercase
const handleUpClick = ()=>{
    console.log('Upper case handle was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase !", "success");
    
}
//converts to lowercase
const handleLoClick = ()=>{
    console.log('Upper case handle was clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase !", "success");
    
}
//clear the text
const handleClearClick = ()=>{
    console.log('Clear case handle was clicked' + text);
    let newText ="";
    setText(newText)
    props.showAlert(" Text Cleared !", "success");
}
//copy text
const handleCopyClick = ()=>{
    // const text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert(" Text Copied to Clipboard !", "success");
}
//To remove Extra spaces by using JSX
const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed !", "success");
}

const handleOnChange = (event)=>{
    console.log('On change');
    setText(event.target.value)
    
}


    // text = "set text here" // wrong way to change the text
    // setText("sety text here") // correct way to change text
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-4">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} ></textarea>
        </div>
        <button  disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button  disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
        <button  disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleClearClick} >Clear Text</button>
        <button  disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleCopyClick} >Copy Text</button>
        <button  disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s +/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p className="prev-text">{text.length>0?text:"Nothing to preview !"}</p>
    </div>
    </>
  );
}

