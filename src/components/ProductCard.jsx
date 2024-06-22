
import { Button } from "antd"
import "../App.css"
import { itemAdded } from "../reducers/cartSlice"
import { useDispatch } from "react-redux"



function ProductCard(props){
   
    const{title,description,price,image,category} = props.product || {}

    const dispatch =useDispatch()
    const addItems =() =>{
        dispatch(itemAdded(props.product))
    }
    return(
        <>
         <div className="product-card">
            <img src ={image} className="product-image"/>
            <div className="product-title">{title}</div>
            <div className="product-category">{category}</div>
            <div className="product-description">{description}</div>
            <div className="product-price">{price}</div>
            <Button  onClick={addItems}>Add to cart</Button>
         </div>
        
        </>
    )
}
export default ProductCard