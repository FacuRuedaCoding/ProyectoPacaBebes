import { useState, useEffect } from "react"
import { getProduct } from "../../AsyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    
    const[product, setProduct] = useState([])
    const[loading, setLoading] = useState(true)
    
    const { productid } = useParams()
    
    useEffect(() =>{
       getProduct(productid).then(response => {
        setProduct(response)
       }).finally(() =>{
        setLoading(false)
       }) 
    },[productid])
    
    console.log(product)

    if(loading){
        return <div>Cargando...</div>
    }

    return(
        <div>
            <h1>Detalles de Producto</h1>
            {/* <itemDetail {...product }/> */}
            <div>{product?.name}</div>
        </div>
    )
}

export default ItemDetailContainer