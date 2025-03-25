import React ,{useState} from 'react';
import './App.css';

function App(props) {

  const [Textval,setTextval]=useState("enter here");

 const buttonCLicked=(e)=>{
  e.preventDefault();
  alert(Textval);
 }

  return (
    <div className="App">
     <input type="text" onChange={(e)=>setTextval(e.target.value)} value={!props.text?Textval:props.text}></input>
     <button onClick={buttonCLicked} style={{"width":"100px","height":"25px"}}>{!props.buttonText?"click me":props.buttonText}</button>
  "You have enterd": {Textval}
    </div>
  );
}

export default App;
