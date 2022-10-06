import {useState, useEffect } from "react"
import { getProducts } from "../../AsyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProductsByCategory } from "../../AsyncMock"

const ItemlistContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError ] = useState(false)
    
    
    const  {categoryId}  = useParams()
    console.log(categoryId)
   
    useEffect(() =>{
        if(!categoryId) {
            getProducts().then(res => {
                console.log(res)
                setProducts(res)
            }).catch(error => {
                console.log(error)
                setError(true)
            }).finally(() =>{
                setLoading(false)
            })
        }else{
            getProductsByCategory().then(res => {
                console.log(res)
                setProducts(res)
            }).catch(error => {
                console.log(error)
                setError(true)
            }).finally(() =>{
                setLoading(false)

            })
        }
        
        
    }, [categoryId])

    if(loading){
        return <h1>Loading... </h1>
    }
    
    if(error){
        return <h1> uppss...hubo un error</h1>
    }
   // const productosTransformados = products.map( product => <li key={product.id}> {product.name} </li>)

    return(
           <div>
             <h1> {greeting} </h1>
             <ItemList products={products} />
           </div> 
           
            ) 
}

export default ItemlistContainer