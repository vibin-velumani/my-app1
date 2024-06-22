import React from "react";
import { useState } from "react";

function Body(props) {
  
  const [dept,setDept]= useState("e")

  function handleDeptchange(e){
    setDept(e.target.value)
  }
  return (
    <>
      <div>Body Component</div>
      <p>Name:{props.name}</p>
      <p>Age :{props.age} </p>
      <p> Dept:{props.dept}</p>
Dept:<input type ="text" name="dept" onChange={handleDeptchange}/>
<p> {props.name} is studing in {dept}</p>
      <p> Height:{props.height}</p>

    </>
  );
}

export default Body;
