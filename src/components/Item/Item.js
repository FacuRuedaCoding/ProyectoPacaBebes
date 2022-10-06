import './item.css'

const Item = (product) => {
   
    return (
        <div key={product.id} className='card'>
             <header>
                <h2>{product.name}</h2>
            </header>

            <img src={product.img} alt={product.name} />
            
            <div className='content'>
                <p> {product.description} </p>
            </div>
            <div>
                <h3> stock: {product.stock}  </h3>
                <h2> {product.price} </h2>
            </div>
        </div>
    )

    
}

export default Item