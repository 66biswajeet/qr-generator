import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { QRCodeSVG } from 'qrcode.react';
import  './App.css';
import  './index.css';

function App() {

  const [Text, setText] = useState("");
  

  const handlechange = (e) => {
    setText(e.target.value);
  }
  return (
    <div className='hero'>

      <h1>ENTER THE LINK </h1>

      <img src={QRCodeSVG} alt="" />
     
      <QRCodeSVG value={Text} size = "400" renderAs='svg'/>
      <input id='inp' type="text" value={Text}  placeholder='https://example.com' onChange={(e) => { handlechange(e) }} />
      
    </div>
  )
}

export default App;
