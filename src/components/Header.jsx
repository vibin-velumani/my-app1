import React from "react";
// import "../css/Header.css"
import "../App.css"
import ThemeButton from "./ThemeButton";
import { useSelector } from "react-redux";
import About from "./About";
import { Link } from "react-router-dom";

function Header(props){

    const cartItems = useSelector((state)=> state.cart.items)
    return(
           <header>
            <div className ="logo">Logo</div>
            <div className ="menu">
                <Link to ='/product'>Products</Link>
                <div>Contact</div>
                <Link to ='/about'>About</Link>
                <Link to ='/cart' >cart:{cartItems.length}</Link>
                
                <ThemeButton />

                </div>
            
           </header>
//         <>
//         <div className ="header">
//         <div className="logo">MyLogo</div>
//            <nav className="nav">
//            <div>about</div>
//             <div>home</div>
//             <div>contact us</div>
//             </nav> 
           
//         </div>
// </>
    )
}
export default Header;