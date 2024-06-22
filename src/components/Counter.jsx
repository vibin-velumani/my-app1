import React, { useContext, useState } from "react";
import { CounterContext } from "../contexts/theme";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../reducers/counterSlice";
import { Button, Input, Space } from "antd";
import '../App.css'

function Counter() {
  // const { increment} = useContext(CounterContext)
  
  // function increment() {
  //   setCount(count + 1)
  //   // setCount(count + 2)
  //   // setCount(count +1)
  //   // setCount((prev)=> prev +1)
  //   // setCount((prev)=> prev +2)        // it advnced to store pevious function 
  //   console.log(count)
  // }

 const count = useSelector((state)=>state.counter.count)
 const dispatch = useDispatch()
 const  [val,setVal]= useState(0)


  // function decrement() {
  //   setCount(count -1)
  //   console.log(count)
  // }
  const handleIncrement =()=>{
    if(val)
      {
  dispatch(incrementByValue(parseInt(val)))
    }
    else{
      dispatch(increment())
    }
  }

  const handleDecrement =()=>{
    dispatch(decrement())
  }
const handleValChange =(e)=>{
 
  setVal(e.target.value)
}

  return (
   <> 
      <div>Counter:{count}</div>
      <Space.Compact>
      <Input   type="number" value={val} onChange={handleValChange}></Input>
       </Space.Compact>
      <Button onClick={handleIncrement}>Increment</Button>
      
      <Button type="primary" onClick={handleDecrement} className="decrementButton">Decrement</Button>
  </>
  );
}
export default Counter;
