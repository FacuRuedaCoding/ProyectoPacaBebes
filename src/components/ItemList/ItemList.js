import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({products}) => {
    return(
        <div key={products?.id} className="cards">
             { products.map( product => Item(product) ) }
        </div>
       
      
    )
}

export default ItemList