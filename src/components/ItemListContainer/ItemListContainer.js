import {useState, useEffect } from "react"
import { getProducts } from "../../AsyncMock"
import ItemList from "../ItemList/ItemList"

const ItemlistContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        getProducts().then(res => {
            console.log(res)
            setProducts(res)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    
   // const productosTransformados = products.map( product => <li key={product.id}> {product.name} </li>)

    return(
           <div>
             <h1> {greeting} </h1>
             <ItemList products={products} />
           </div> 
           
            ) 
}

export default ItemlistContainer