import { useContext } from "react";
import { CounterContext, ThemeContext } from "../contexts/theme";
import '../App.css'
function ThemeButton()
{
    const{theme,toggleTheme}= useContext(ThemeContext)
    // const {increment}=useContext(CounterContext)
       function handle(){
        
        toggleTheme();
       }

return (
    <>
    <button className="decrementButton" onClick={handle}>{theme}</button>
  
    
    </>
)
}
export default ThemeButton;