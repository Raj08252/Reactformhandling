// import React from "react";
import { useState } from 'react';
import './index.css';

const App=()=>
{
    const[name,setname]=useState("");
    const[lastname,setlastname]=useState("");
    const[fullname,setfullname]=useState("");
    const[lastnamenew,setlastnamenew]=useState("");
    function onsubmit(e)
    {   
      e.preventDefault();
        setfullname(name);
        setlastnamenew(lastname);
    
    }
    function inputval(e)
    {
      e.preventDefault();
      setname(e.target.value);
    }
    function inputval2(e)
    {
      e.preventDefault();
      setlastname(e.target.value);
    }
 
 return (
<>
<form onSubmit={onsubmit}>
<div className='container'>
<h1 className='heading'>Hello,{fullname} {lastnamenew}</h1>
<center><input type="text" placeholder='Enter your first name' onChange={inputval} className="form-control" value={name}/></center><br/>
<center><input type="text" placeholder='Enter your last name' onChange={inputval2} className="form-control" value={lastname}/></center><br/>
<button type="submit" className='btn'>Submit</button>
</div>
</form>
</>
 );
}

export default App;