import React, { Fragment, useState } from "react";
import "./App.css";

import Input from "../src/Components/Input";
import List from "../src/Components/List";

function App() {
  const[open,setopen]=useState(false)
  return (
    <Fragment>
      <div className="container">
        <Input/>
        <div className="text-center">
              <button className="btn btn-success" onClick={()=>setopen(!open)} >
              Show Movies
              </button>
        </div>
        {open ? <List/> : null }
      </div>  
    </Fragment>
  );
}

export default App;