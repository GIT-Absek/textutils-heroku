import React, { useState } from 'react';

export default function Textform(props) {

    const handleUppercaseClick = () => {
        let UPtext = text.toUpperCase();
        setText(UPtext);
        props.showAlert("Text has been converted to Uppercase","success");
    }
    const handleLowercaseClick = () => {
        let LOWtext = text.toLowerCase();
        setText(LOWtext);
        props.showAlert("Text has been converted to Lowercase","success");
    }
    const handleClear = () => {
        let CLEAREDtext = "";
        setText(CLEAREDtext);
        props.showAlert("Text has been Cleared","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCopy = () => {
       // var text = document.getElementById("mybox");
        //text.select();
        navigator.clipboard.writeText(text);
        //document.getSelection().removeAllRanges();
        props.showAlert("Text has been Copied","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces has been removed from the text","success");
    }

    const [text, setText] = useState(""); // const [variable,function to change the value of variable] = useState("default value of variable");
    return (
        <>
            <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3 my-3">
                    <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <div className="d-grid gap-2"> <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'light'} my-2`} onClick={handleClear}> Clear Text </button> </div>
                <div className="d-grid gap-2 d-md-block">
                    <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'light'} my-2`} onClick={handleUppercaseClick}> Convert to Uppercase</button>
                    <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'light'} my-2 mx-2`} onClick={handleLowercaseClick}> Convert to Lowercase</button>
                    <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'light'} my-2 mx-2`} onClick={handleCopy}> Copy Text </button>
                    <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'light'} my-2 mx-2`} onClick={handleExtraSpaces}> Remove extra spaces</button>

                </div>
            </div>
            <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h2> Your Text Summary -</h2>
                <p> <b> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words </b> and <b> {text.length} Characters.</b> </p>
                <p> It will take <b> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes </b> to read the typed text.</p>
                <h2> Text Preview - </h2>
                <p> {text.length>0?text:"Type something to preview"} </p>
            </div>
        </>
    )
}
