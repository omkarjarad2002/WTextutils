import React,{useState} from "react";

export default function About(props) {

  //css ashi add karaychi aste react madhe
  // const [mystyle, setMyStyle] = useState({
  //   color : "black",
  //   backgroundColor:"whitesmoke"

  // });

  let mystyle = {
    color: props.mode === 'dark'?'white' :'#042743',
    backgroundColor : props.mode ==='dark'? 'rgb(36 74 104)':'white'
  };
  const [btnText, setBtnText] = useState("Enable Light Mode");

  // const toggleStyle=()=>{
  //   if (mystyle.color === 'black'){
  //     setMyStyle({
  //       color:"whitesmoke",
  //       backgroundColor:"black",
  //       border:" 1px solid white"
  //     });
  //     setBtnText("Enable Dark Mode")
  //   }else{
  //       setMyStyle({
  //         color : "black",
  //         backgroundColor:"whitesmoke"
  //       });
  //     setBtnText("Enable Light Mode")
  //   }
  // }

  return (
    <div className="container" style={{color : props.mode==='dark'?'white' :'#042743',mystyle}} >
        <h1>About us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne" >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne" style={mystyle}
            >
             <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={mystyle}>
              Textutils gives you a way to analyze your text quickly and efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="flush-headingTwo" >
            <button
              className="accordion-button collapsed" style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <strong>Free to use</strong> 
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={mystyle}>
               Textutil is a free character counter tool that provides instance character count and word count statistics for given text.
            </div>
          </div>
        </div>
        <div className="accordion-item"  >
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed" style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={mystyle}>
              This word counter software in any web browsers such as Crome,Firefox, etc.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
