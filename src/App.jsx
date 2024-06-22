import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Body from "./components/Body"
import Counter from "./components/Counter";
import Header from "./components/Header"
import Products from "./components/Products";
import { useEffect } from "react";
import { CounterContext, ThemeContext } from "./contexts/theme";
import ProductCard from "./components/ProductCard";
import { Outlet } from "react-router-dom";
// function App() {
//   const name = "vibin";
//   const age = 20;
//   // const dept = "mca";
//   const height = 160;

//   return (
//     <>
//     <Header/>

//       <div>App components</div>
//       <p> Paragraph</p>
       
//       <Body name={name} age={age}  height={height} />
//       <Counter />
//     </>
//   );
// }
// // const App = ()=>{

// // }
// export default App;


function App(){
  const[theme,setTheme]=useState('Light')
 

//no dependency Array 
useEffect(()=>{
document.body.className =theme
},[theme])


  function  toggleTheme(){
    setTheme (theme==='Light'?'Dark' :'Light')
  }
 
  
  return(

    
    <ThemeContext.Provider value={{theme:theme,toggleTheme:toggleTheme}}>
     
    <Header />
    <Outlet/>
    
    </ThemeContext.Provider>
    // {role==='staff' && <studentDetailsForm/>}
    // {role==='student' && <gradedetails/>}
    
  )
}
export default App;